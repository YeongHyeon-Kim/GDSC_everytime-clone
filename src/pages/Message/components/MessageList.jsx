import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";

const MessageItem = styled.div`
    height: 40px;
    margin-top: 20px;
    cursor: pointer;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${COLORS.grey_light};
    padding: 5px;
    padding-top: 0px;
    font-size: 14px;
    .message-top {
        display: flex;
        justify-content: space-between;
        .message-date {
            color: ${COLORS.grey_text};
            font-size: 12px;
            margin-right: 10px;
        }
    }
    .message-title {
        height: 20px;
        width: flex;
        padding-top: 5px;
        color: ${COLORS.black};
        text-overflow: ellipsis;
        overflow: hidden;
        word-wrap: break-word;
        white-space: nowrap;
        font-size: 13px;
    }
`;

const MessageList = ({ msg }) => {
    return (
        <MessageItem>
            <Link className="messgae-item" to={`message/${msg.id}`}>
                <div className="message-top">
                    <p className="nickname"> {msg.nick} </p>
                    <p className="message-date"> {msg.date} </p>
                </div>
                <p className="message-title">{msg.title}</p>
            </Link>
        </MessageItem>
    );
};

export default MessageList;
