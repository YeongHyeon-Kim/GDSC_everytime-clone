import React from "react";
import DetailMessageList from "./DetailMessageList";

const DetailMessageWrapper = ({ messageList }) => {
    return (
        <div>
            {messageList.map((msg, index) => (
                <DetailMessageList msg={msg} />
            ))}
        </div>
    );
};

export default DetailMessageWrapper;
