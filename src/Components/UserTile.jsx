import { Redirect, Link } from "react-router-dom";
import useStore from "../store";

function UserTile({user, setActiveUser}) {
	return (
		<li>
			<Link to="/logged-in" onClick={() => {
                setActiveUser(user.id)
            }} class="user-selection">
				<img
					class="avatar"
					width="50"
					height="50"
					src={user.avatar}
					alt=""
				/>
				<h3>{user.firstName + "" + user.lastName}</h3>
			</Link>
		</li>
	);
}

export default UserTile
