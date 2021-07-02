function Message({userId,
    activeUser,
    messageText}) {
    return (
        <li className={userId !== activeUser ? "outgoing" : ""}>
        <p>{messageText}</p>
    </li>
    )
}
export default Message