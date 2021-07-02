import { useEffect, useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import useFetchUsers from "./Hooks/useFetchUsers";
import LoginPage from "./Pages/LoginPage";
import MainApp from "./Pages/MainApp";

//STATE:
//1. Logged in user
//2. User Messages

export default function App() {
	const [activeUser, setActiveUser] = useState(null);
	const users = useFetchUsers();
    const history = useHistory()
    
    useEffect(()=> {
        if(!activeUser) {
            history.push("/login")
        }
        else {
            history.push("/logged-in")
        }
    }, [activeUser])
	return (
		<Switch>
			<Route exact path="/">
				<Redirect to="/login" />
			</Route>
			<Route path="/login">
				<LoginPage
					activeUser={activeUser}
					setActiveUser={setActiveUser}
					users={users}
				/>
			</Route>
			<Route path="/logged-in">
				{activeUser ?
				<MainApp activeUser={activeUser} users={users} /> :
				<Redirect to="/login" />}
			</Route>
		</Switch>
	);
}
