import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import xVector from "../../../../assets/vector/xVector.svg";
import { COLORS } from "../../../../components/Colors";
import AuthItemWrapper from "./components/AuthItemWrapper";
import { dummyAuth } from "../../../../components/dummyData";

const SchoolAuthWrapper = styled.div`
    margin: 15px;
    .auth-top {
        display: flex;
        margin-bottom: 30px;
        justify-content: space-between;
        .auth-text {
            font-size: 20px;
        }
        img {
            width: 15px;
            height: 15px;
        }
    }
    h1 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }
`;

const Index = () => {
    const dummy = dummyAuth;
    return (
        <SchoolAuthWrapper>
            <div className="auth-top">
                <p className="auth-text">학교 인증</p>
                <Link to="/mypage">
                    <img src={xVector} alt="취소 버튼" />
                </Link>
            </div>
            <h1>인증 방식 선택</h1>
            <AuthItemWrapper auth={dummy} />
        </SchoolAuthWrapper>
    );
};

export default Index;
