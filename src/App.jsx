import SideBar from "./Components/sidebar";
import "./App.css";
const user = localStorage.getItem("user");
function App() {
	return (
		<>
			<SideBar user={user} />
		</>
	);
}

export default App;
