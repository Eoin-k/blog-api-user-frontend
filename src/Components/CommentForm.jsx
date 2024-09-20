import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CommentForm() {
	const user = localStorage.getItem("user");
	const [comment, setComment] = useState("");
	const authorId = localStorage.getItem("id");
	let { id } = useParams();
	const submitComment = async () => {
		const url = import.meta.env.VITE_BACKEND_URL;

		try {
			await fetch(`${url}/post/${id}/comments`, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({ comment, authorId, id }),
			});
		} catch (error) {
			console.error(error);
		}
	};

	if (user) {
		return (
			<>
				<div className="comment-form-wrapper">
					<form action="">
						<label htmlFor="comment">
							<p>Add a comment:</p>
							<textarea
								onChange={(e) => setComment(e.target.value)}
								cols={40}
								rows={15}
								name="comment"
								id="comment"
							></textarea>
						</label>
						<button
							className="button-primary"
							onClick={submitComment}
							type="button"
						>
							Submit Comment
						</button>
					</form>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="comment-form-wrapper">
					<p>You must be logged in to post a comment</p>
					<Link className="button-primary comment-login" to={"/login"}>
						Login
					</Link>
				</div>
			</>
		);
	}
}
