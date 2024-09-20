import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import SideBar from "../src/Components/sidebar";
import "../src/App.css";
import { useState, useEffect } from "react";
import PostGrid from "../src/Components/PostGrid";

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
				setPosts(data);
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
			<PostGrid posts={posts} />
			<Footer />
		</>
	);
}
