import { useEffect, useState } from "react";

function GetMessages() {
	const [messages, setMessages] = useState([]);
    const [messageSent, setMessageSent] = useState(true)

	useEffect(() => {
		fetch(`http://localhost:4000/messages`)
			.then((resp) => resp.json())
			.then((data) => {
				setMessages(data);
			});
	}, [messageSent]);

    return {messages, messageSent, setMessageSent}
}

export default GetMessages