import { useEffect, useState } from "react";

function MainMessages({ selectedConversation, activeUser }) {
	const [messages, setMessages] = useState([]);
	console.log("selectedConversation:", selectedConversation);

	useEffect(() => {
		fetch(
			`http://localhost:4000/messages?conversationId=${selectedConversation}`
		)
			.then((resp) => resp.json())
			.then(setMessages);
	}, [selectedConversation]);
	console.log(messages);

	if (selectedConversation === null) {
		return null;
	}
	return (
		<ul class="conversation__messages">
			{messages.map((message) => {
                console.log(message)
                console.log(activeUser)
				return (
                <li className={message.userId !== activeUser ? "outgoing" : ""}>
					<p>{message.messageText}</p>
				</li>
                )
			})}
		</ul>
	);
}
export default MainMessages;
