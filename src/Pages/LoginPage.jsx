
import useStore from "../store";
import UserTile from "../Components/UserTile";

function LoginPage({setActiveUser, users}) {
	

    if (users === []) {
        return <h1>Loading...</h1>
    }
	return (
		<div class="main-wrapper login">
			<section class="login-section">
				<h2>Choose your user!</h2>
				<ul>
					{users.map((user,index) => {
						return (
							<li>
								<UserTile key={index} user={user}
                                setActiveUser={setActiveUser} />
							</li>
						);
					})}
					<li>
						<button class="user-selection">
							<h3>+ Add a new user</h3>
						</button>
					</li>
				</ul>
			</section>
		</div>
	);
}

export default LoginPage;
