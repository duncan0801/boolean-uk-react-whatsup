import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import useFetchUsers from "./Hooks/useFetchUsers";
import LoginPage from "./Pages/LoginPage";
import MainApp from "./Pages/MainApp";

//STATE:
//1. Logged in user
//2. User Messages

export default function App() {
	const [activeUser, setActiveUser] = useState(null);
	const users = useFetchUsers();
	return (
		<Switch>
			<Route path="/login">
				<LoginPage
					activeUser={activeUser}
					setActiveUser={setActiveUser}
					users={users}
				/>
			</Route>
			<Route path="/logged-in">
				<MainApp activeUser={activeUser} users={users} />
			</Route>
		</Switch>
	);
}
