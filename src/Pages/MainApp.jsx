import MainMessages from "../Components/MainMessages";
import SideChatList from "../Components/SideChatList";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

function MainApp({ activeUser, users }) {
	const [userChats, setUserChats] = useState([]);
	const [selectedConversation, setSelectedConversation] = useState(null);
	const currentUser = users.find((user) => user.id === activeUser);
	const [searchString, setSearchString] = useState("");
    const [messageString, setMessageString] = useState("")

	console.log(selectedConversation);

	function filterMessages(messages) {
		return messages.filter((message) =>
			message.messageText.includes(searchString)
		);
	}

	function sendMessage(message, userId, conversationId) {
		fetch(`http://localhost:4000/messages`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userId: userId,
				messageText: message,
				conversationId: conversationId
			}),
		});
	}

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
		<div className="main-wrapper">
			{/* <!-- Side Panel --> */}
			<aside>
				{/* <!-- Side Header --> */}
				<header className="panel">
					<img
						className="avatar"
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
				<form className="aside__search-container">
					<input
						onChange={(e) => setSearchString(e.target.value)}
						type="search"
						name="messagesSearch"
						placeholder="Search chats"
						value={searchString}
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
			<main className="conversation">
				{/* <!-- Chat header --> */}
				<header className="panel"></header>
				<Route path="/logged-in/:chatId">
					<MainMessages
						selectedConversation={selectedConversation}
						activeUser={activeUser}
						filterMessages={filterMessages}
						searchString={searchString}
					/>
				</Route>

				<ul className="conversation__messages"></ul>
				{/* <!-- Message Box --> */}
				<footer>
					<form className="panel conversation__message-box" onSubmit={(event) => {
								event.preventDefault();
								sendMessage(messageString, activeUser, selectedConversation)
                                console.log(selectedConversation)
							}}> 
						<input
							type="text"
							placeholder="Type a message"
							rows="1"
							value={messageString}
                            onChange={(event) => setMessageString(event.target.value)}
						/>
						<button
							type="submit"
						>
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
