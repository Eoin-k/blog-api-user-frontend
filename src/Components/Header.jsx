import { Link } from "react-router-dom";
function Header() {
	return (
		<>
			<div className="header-outer">
				<div className="header-inner container">
					<div className="heading-wrapper">
						<h2>The Blog zone</h2>
					</div>
					<div className="buttons-wrapper">
						<Link to="/signup">Sign up</Link>
						<Link to="/login">Login</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
