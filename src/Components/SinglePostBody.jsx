import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
const SinglePostBody = () => {
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
			{" "}
			<div className="container">
				<div className="post-header">
					<h1>This is the single post element {post.id}</h1>
				</div>
				<div className="post-body">
					<p>{post.content}</p>
				</div>
				<div className="comments-wrapper">
					{comments.length == 0 ? (
						<div className="comments-inner">
							<p>No comments to show</p>
							<CommentForm />
						</div>
					) : (
						<div className="comments-inner">
							<Comments comments={comments} />
							<CommentForm />
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default SinglePostBody;
