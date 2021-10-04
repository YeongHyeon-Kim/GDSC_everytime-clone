import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../../../components/Colors";
import { Link } from "react-router-dom";
import xVector from "../../../../assets/vector/xVector.svg";
import MainInput from "../../../../components/Input/MainInput";
import MainButton from "../../../../components/Button/MainButton";

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
{
    /* <MainInput value={id} type="text" onChange={onChangeId} placeholder="이메일을 입력해주세요." />; */
}
const Index = () => {
    const [email, setEmail] = useState("");
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const emailCheck = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    const checkEmail = (e) => {
        if (!emailCheck.test(email)) {
            alert("이메일을 정확히 입력해주세요");
        } else {
            alert("학교 인증 완료!");
        }
    };
    return (
        <AuthDetailWrapper>
            <div className="detail-title">
                <p className="detail-text">이메일 인증</p>
                <Link to="/mypage/auth">
                    <img src={xVector} alt="취소버튼" />
                </Link>
            </div>
            <p className="text">이메일 입력</p>
            <MainInput value={email} onChange={onChangeEmail} type="text" placeholder="이메일을 입력해주세요" />
            <br />
            <br />
            <MainButton text="이메일 보내기" onClick={checkEmail} />
        </AuthDetailWrapper>
    );
};

export default Index;
