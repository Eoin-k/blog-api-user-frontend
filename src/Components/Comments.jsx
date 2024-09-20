const Comments = (comments) => {
	{
		// need to access further due to shape of response from dbquery
		comments = comments.comments;
		console.log(comments, "this thing");
	}
	return (
		<>
			{comments.map((comment, index) => {
				return (
					<div key={index}>
						<p>{comment.content}</p>
					</div>
				);
			})}
		</>
	);
};

export default Comments;
