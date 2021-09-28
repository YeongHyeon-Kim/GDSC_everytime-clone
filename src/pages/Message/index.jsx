import React from "react";

import styled from "styled-components";

import BottomNavigation from "../../layout/BottomNavigation";
import { dummyMessage } from "../../components/dummyData";
import MessageWrapper from "./components/MessageWrapper";

const ContentWrapper = styled.div`
    width: 100%;
    height: calc(100%-40px);
    padding-top: 40px;
    margin-left: 15px;
    .message-top-navigation {
        position: fixed;
        width: 100%;
        max-width: 500px;
        top: 15px;
        margin-left: 5px;
        height: 40px;
        text-decoration: underline;
    }
`;

const Index = () => {
    return (
        <ContentWrapper>
            <div>
                <div className="message-top-navigation">
                    <p>쪽지함</p>
                </div>

                <div className="check-message">
                    <MessageWrapper messageList={dummyMessage} />
                </div>

                <div className="bottom-navigation">
                    <BottomNavigation activeNum={3} />
                </div>
            </div>
        </ContentWrapper>
    );
};

export default Index;
