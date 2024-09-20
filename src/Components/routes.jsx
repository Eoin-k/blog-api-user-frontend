import App from "../App";
import SinglePost from "./SinglePost";
import LoginForm from "./login";

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
];

export default routes;
