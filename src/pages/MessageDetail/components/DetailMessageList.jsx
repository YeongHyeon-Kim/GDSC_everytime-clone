import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";

const DetailMessageItem = styled.div`
    height: auto;
    margin-top: 20px;
    cursor: pointer;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${COLORS.grey_dark};
    padding: 5px;
    padding-top: 0px;
    font-size: 13px;

    .message-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        .message-date {
            color: ${COLORS.grey_text};
            font-size: 12px;
            margin-right: 10px;
        }
    }
`;

const DetailMessageList = ({ msg }) => {
    const itemtype = msg.isFrom ? "받은 쪽지" : "보낸 쪽지";
    return (
        <DetailMessageItem>
            <div className="message-title">
                <p className="item-type" style={{ color: msg.isFrom ? COLORS.green : COLORS.yellow }}>
                    {itemtype}
                </p>
                <p className="message-date">{msg.date}</p>
            </div>
            <div>
                <p className="detail-message">{msg.contents}</p>
            </div>
        </DetailMessageItem>
    );
};

export default DetailMessageList;
