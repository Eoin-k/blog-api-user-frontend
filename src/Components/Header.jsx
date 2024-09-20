import { Link } from "react-router-dom";
import SideBar from "./sidebar";
function Header() {
	const user = localStorage.getItem("user");
	if (user) {
		return (
			<>
				<div className="header-outer">
					<div className="header-inner container">
						<div className="heading-wrapper">
							<h2>The Blog zone</h2>
							<SideBar user={user} />
						</div>
						<div className="buttons-wrapper">
							<Link className="button-primary" to="/signup">
								Sign up
							</Link>
							<Link className="button-primary" to="/login">
								Login
							</Link>
						</div>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<>
					<div className="header-outer">
						<div className="header-inner container">
							<div className="heading-wrapper">
								<h2>The Blog zone</h2>
							</div>
							<div className="buttons-wrapper">
								<Link className="button-primary" to="/signup">
									Sign up
								</Link>
								<Link className="button-primary" to="/login">
									Login
								</Link>
							</div>
						</div>
					</div>
				</>
			</>
		);
	}
}

export default Header;
