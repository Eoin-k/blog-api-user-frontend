import { useState } from "react";
const CreatePost = (user) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const createPost = async () => {
		const url = import.meta.env.VITE_BACKEND_URL;
		const token = localStorage.getItem("token");
		const id = localStorage.getItem("id");

		try {
			if (user) {
				const res = await fetch(`${url}/createpost`, {
					method: "POST",
					headers: {
						bearer: token,
						"content-type": "application/json",
					},
					body: JSON.stringify({ title, content, published: true, id }),
					user: user,
				});

				if (res.ok) {
					alert("Post was successfully created");
					return;
				}
			} else {
				console.log("Cannot complete request");
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			{user ? (
				<div>
					<h1>This is the form to submit a post</h1>
					<form action="">
						<label htmlFor="title">
							Post title
							<input
								type="text"
								id="title"
								onChange={(e) => setTitle(e.target.value)}
							/>
						</label>
						<label htmlFor="content">
							Post Content
							<textarea
								name="content"
								id="content"
								onChange={(e) => setContent(e.target.value)}
							></textarea>
						</label>
						<button type="button" onClick={createPost}>
							Create Post
						</button>
					</form>
				</div>
			) : (
				<div>
					<h2>
						You do not have permission to access this page please login or
						request access from an admin
					</h2>
				</div>
			)}
		</>
	);
};

export default CreatePost;
