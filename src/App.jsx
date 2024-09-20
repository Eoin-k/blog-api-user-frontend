import SideBar from "./Components/sidebar";
import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const user = localStorage.getItem("user");
function App() {
	const url = import.meta.env.VITE_BACKEND_URL;
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getAllPosts = async () => {
			try {
				const res = await fetch(`${url}`);
				const data = await res.json();
				await setPosts(data);
				console.log(posts);
				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		getAllPosts();
	}, []);

	if (loading) {
		return (
			<>
				<div>Loading posts.......</div>
			</>
		);
	}
	return (
		<>
			<SideBar user={user} />
			{posts.map((post, index) => {
				return (
					<>
						<div key={index}>
							<p>{post.title}</p>
							<Link to={`/post/${post.id}`}>Link to {post.title}</Link>
						</div>
					</>
				);
			})}
		</>
	);
}

export default App;
