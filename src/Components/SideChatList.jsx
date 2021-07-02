import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetMessages from "../Hooks/GetMessages";

function SideChatList({ users, userChats, activeUser, setSelectedConversation }) {
	let {messages} = GetMessages();
	if (userChats.length === 0 && messages.length === 0) {
		return <h1>Loading...</h1>;
	}

	return (
		<ul>
			{/* <!-- This first item should always be present --> */}
			<li>
				<button class="chat-button">
					<div>
						<h3>+ Start a new Chat</h3>
					</div>
				</button>
			</li>
			{userChats.map((chat) => {
				const chatMessages = messages.filter((message) => {
					return message.conversationId === chat.id;
				});
				const lastMessage = chatMessages.pop();
				const participant = users.find((user) => {

					if (activeUser === chat.userId) {
						return user.id === chat.participantId;
					}
					if (activeUser === chat.participantId) {
						return user.id === chat.userId;
					}
				});
				return (
					<li>
						<Link to={`/logged-in/${chat.id}`} class="chat-button">
							<button onClick={(e) => setSelectedConversation(chat.id)}>
								<img
									class="avatar"
									height="50"
									width="50"
									alt=""
									src={participant.avatar}
								/>
								<div >
									<h3>
										{participant.firstName +
											" " +
											participant.lastName}
									</h3>
									<p className="ellipses-overflow" >
										{lastMessage
											? lastMessage.messageText
											: ""}
									</p>
								</div>
							</button>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
export default SideChatList;
