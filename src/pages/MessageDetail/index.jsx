import React from "react";
import styled from "styled-components";
import { COLORS } from "../../components/Colors";
import vectorRight from "../../assets/vector/vectorRight.svg";
import { Link } from "react-router-dom";

import DetailMessageWrapper from "./components/DetailMessageWrapper";
import { dummyDetailMessage } from "../../components/dummyData";

const DetailWrapper = styled.div`
    height: 40px;
    margin-top: 25px;
    cursor: pointer;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${COLORS.grey_dark};
    padding: 5px;
    padding-top: 0px;
    font-size: 14px;
    .detail-message-top {
        display: flex;
        margin-bottom: 40px;

        .message-sender {
            position: absolute;
            /* text-align: center; */
            left: 50%;
            transform: translate(-50%, -50%);
        }
        img {
            width: 15px;
            height: 15px;
            transform: rotate(180deg);
        }
    }
`;

const Index = () => {
    return (
        <DetailWrapper>
            <div className="detail-message-top">
                <Link className="back" to="/message">
                    <img src={vectorRight} alt="뒤로가기 버튼" />
                </Link>
                <p className="message-sender">익명</p>
            </div>
            <div className="detail-message">
                <DetailMessageWrapper messageList={dummyDetailMessage} />
            </div>
        </DetailWrapper>
    );
};

export default Index;
