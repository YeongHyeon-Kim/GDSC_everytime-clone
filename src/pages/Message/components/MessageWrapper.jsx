import React from "react";

import MessageList from "./MessageList";

const MessageWrapper = ({ messageList }) => {
    return (
        <div>
            {messageList.map((msg, index) => (
                <MessageList msg={msg} />
            ))}
        </div>
    );
};

export default MessageWrapper;
