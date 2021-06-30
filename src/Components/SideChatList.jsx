function SideChatList({ users, userChats }) {
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
				const participant = users.find(
					(user) => {
                        // if(chat.userId !== user.id) {
                        //     return 
                        // }
                        // if(chat.participantID === user.id) {

                        // }
                    }
				);
				return (
					<li>
						<button class="chat-button">
							<img
								class="avatar"
								height="50"
								width="50"
								alt=""
								src={participant.avatar}
							/>
							<div>
								<h3>{participant.firstName + " " + participant.lastName}</h3>
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
