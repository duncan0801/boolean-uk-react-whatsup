import useStore from "../store";
import UserTile from "../Components/UserTile";

function LoginPage({ setActiveUser, users }) {
	if (users === []) {
		return <h1>Loading...</h1>;
	}
	return (
		<div className="main-wrapper login">
			<section className="login-section">
				<h2>Choose your user!</h2>
				<ul>
					{users.map((user, index) => {
						return (
							<UserTile
								key={index}
								user={user}
								setActiveUser={setActiveUser}
							/>
						);
					})}
					<li>
						<button className="user-selection">
							<h3>+ Add a new user</h3>
						</button>
					</li>
				</ul>
			</section>
		</div>
	);
}

export default LoginPage;
