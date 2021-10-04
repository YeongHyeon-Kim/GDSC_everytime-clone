import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import { Link } from "react-router-dom";
import xVector from "../../../assets/vector/xVector.svg";
import MainInput from "../../../components/Input/MainInput";
import MainButton from "../../../components/Button/MainButton";

const AuthDetailWrapper = styled.div`
    margin: 15px;
    .detail-title {
        display: flex;
        margin-bottom: 30px;

        justify-content: space-between;
        .detail-text {
            font-size: 15px;
        }
        img {
            width: 15px;
            height: 15px;
        }
    }
    .text {
        color: ${COLORS.grey_text};
        font-size: 13px;
        margin-bottom: 10px;
    }
`;

const Index = () => {
    const [nick, setNick] = useState("GDSC_web");
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };

    return (
        <AuthDetailWrapper>
            <div className="detail-title">
                <p className="detail-text">닉네임 변경</p>
                <Link to="/mypage">
                    <img src={xVector} alt="취소버튼" />
                </Link>
            </div>
            <p className="text">닉네임</p>
            <MainInput value={nick} onChange={onChangeNick} type="text" placeholder="수정할 닉네임을 입력해주세요" />

            <br />
            <br />
            <MainButton text="닉네임 설정" onClick={() => alert("닉네임 변경 완료!")} />
        </AuthDetailWrapper>
    );
};

export default Index;
