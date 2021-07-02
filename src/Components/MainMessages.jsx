import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";

function MainMessages({ activeUser, filterMessages, searchString }) {
	const [messages, setMessages] = useState([]);
    
    const {chatId} = useParams()

	useEffect(() => {
		fetch(
			`http://localhost:4000/messages?conversationId=${chatId}`
		)
			.then((resp) => resp.json())
			.then(setMessages);
	}, [chatId]);

	if (chatId === null) {
		return null;
	}
    // if(searchString !== "") {
    //    let filteredMessages = filterMessages(messages)
    //    console.log(messages)
    // }
    // console.log(messages)
	return (
		<ul class="conversation__messages">
			{messages.map((message) => {
				return (
               <Message
               key={message.id}
               userId={message.userId}
               activeUser={activeUser}
               messageText={message.messageText} />
                )
			})}
		</ul>
	);
}
export default MainMessages;
