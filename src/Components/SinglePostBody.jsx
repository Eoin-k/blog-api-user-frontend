import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";
import Header from "./Header";
const SinglePost = () => {
	const url = import.meta.env.VITE_BACKEND_URL;
	let { id } = useParams();
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);

	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getpost = async () => {
			try {
				const res = await fetch(`${url}/post/${id}`);
				const data = await res.json();
				setPost(data[0]);
				setComments(...comments, data[0].comments);
				console.log(data);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		getpost();
	}, []);

	if (post.published == false) {
		return <p>sorry it seems we dont have that post here</p>;
	}

	if (loading) {
		return <div>Loading....</div>;
	}

	return (
		<>
			<Header />
			<h1>This is the single post element {post.id}</h1>
			<p>{post.content}</p>
			{comments.length == 0 ? (
				<p>No comments to show</p>
			) : (
				<Comments comments={comments} />
			)}
			<Link to="/">Go home</Link>
		</>
	);
};

export default SinglePost;
