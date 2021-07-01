import MainMessages from "../Components/MainMessages";
import SideChatList from "../Components/SideChatList";
import { useEffect, useState } from "react";

function MainApp({ activeUser, users }) {
	const [userChats, setUserChats] = useState([]);
	const [selectedConversation, setSelectedConversation] = useState(null);
	const currentUser = users.find((user) => user.id === activeUser);

	useEffect(() => {
		fetch(`http://localhost:4000/conversations?userId=${activeUser}`)
			.then((resp) => resp.json())
			.then((chats) => {
				setUserChats(chats);
			});
	}, []);

	if (userChats === []) {
		return <h1>Loading...</h1>;
	}

	return (
		<div class="main-wrapper">
			{/* <!-- Side Panel --> */}
			<aside>
				{/* <!-- Side Header --> */}
				<header class="panel">
					<img
						class="avatar"
						width="50"
						height="50"
						src={currentUser.avatar}
						alt=""
					/>
					<h3>
						{currentUser.firstName + " " + currentUser.lastName}
					</h3>
				</header>
				{/* <!-- Search form --> */}
				<form class="aside__search-container">
					<input
						type="search"
						name="messagesSearch"
						placeholder="Search chats"
						value=""
					/>
				</form>
				<SideChatList
					users={users}
					userChats={userChats}
					activeUser={activeUser}
                    setSelectedConversation={setSelectedConversation}
				/>
			</aside>

			{/* <!-- Main Chat Section --> */}
			<main class="conversation">
				{/* <!-- Chat header --> */}
				<header class="panel"></header>
				<MainMessages
					selectedConversation={selectedConversation}
				/>
				<ul class="conversation__messages"></ul>
				{/* <!-- Message Box --> */}
				<footer>
					<form class="panel conversation__message-box">
						<input
							type="text"
							placeholder="Type a message"
							rows="1"
							value=""
						/>
						<button type="submit">
							{/* <!-- This is the send button --> */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
							>
								<path
									fill="currentColor"
									d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
								></path>
							</svg>
						</button>
					</form>
				</footer>
			</main>
		</div>
	);
}

export default MainApp;
