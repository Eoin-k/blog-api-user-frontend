import App from "../App";
import SinglePost from "./SinglePost";
import LoginForm from "./login";
import CreatePost from "./CreatePost";

const routes = [
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/post/:id",
		element: <SinglePost />,
	},
	{
		path: "/login",
		element: <LoginForm />,
	},
	{
		path: "/createpost",
		element: <CreatePost />,
	},
];

export default routes;
