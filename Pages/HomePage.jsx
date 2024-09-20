import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import SideBar from "../src/Components/sidebar";
import "../src/App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
	const user = localStorage.getItem("user");
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
				<Header />
				<div>Loading posts.......</div>
				<Footer />
			</>
		);
	}
	return (
		<>
			<Header />
			<SideBar user={user} />
			<div className="card-grid">
				{posts.map((post, index) => {
					return (
						<>
							<div className="post-card" key={index}>
								<p>{post.title}</p>
								<Link to={`/post/${post.id}`}>View Post</Link>
							</div>
						</>
					);
				})}
			</div>
			<Footer />
		</>
	);
}
