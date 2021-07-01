function SideChatList({ users, userChats, activeUser, setSelectedConversation }) {
	if (userChats === []) {
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
				const participant = users.find((user) => {
					if(activeUser === chat.userId) {
                        return user.id === chat.participantId
                    }
                    if(activeUser === chat.participantId) {
                        return user.id === chat.userId
                    }
				});
				return (
					<li>
						<button onClick={() => setSelectedConversation(chat.id)} class="chat-button">
							<img
								class="avatar"
								height="50"
								width="50"
								alt=""
								src={participant.avatar}
							/>
							<div>
								<h3>
									{participant.firstName +
										" " +
										participant.lastName}
								</h3>
								<p>Last message</p>
							</div>
						</button>
					</li>
				);
			})}
		</ul>
	);
}
export default SideChatList;
