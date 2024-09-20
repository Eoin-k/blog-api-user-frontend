import { useState } from "react";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginSubmission = async () => {
		const url = import.meta.env.VITE_BACKEND_URL;
		try {
			console.log("trying to log in");
			const res = await fetch(`${url}/login`, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await res.json();

			if (res.ok) {
				localStorage.setItem("token", data.token);
				localStorage.setItem("user", data.user);
				localStorage.setItem("role", data.role);
				localStorage.setItem("id", data.id);
				return;
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="login-text-wrapper">
				<h1>This is the login form</h1>
			</div>
			<div className="login-form-wrapper">
				<form>
					<label htmlFor="email">
						Email:
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value, console.log(email))}
						/>
					</label>
					<label htmlFor="password">
						Password:
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<button onClick={loginSubmission} type="button">
						Login
					</button>
				</form>
			</div>
		</>
	);
};

export default LoginForm;
