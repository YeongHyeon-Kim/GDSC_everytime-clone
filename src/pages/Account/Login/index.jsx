import styled from "styled-components";
import React, { useState } from "react";
import { COLORS } from "../../../components/Colors";
import MainInput from "../../../components/Input/MainInput";
import MainButton from "../../../components/Button/MainButton";
import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const MainWrapper = styled.div`
    .title {
        .logo-img {
            text-align: center;
            margin-bottom: 10px;
            margin-top: 20px;
            img {
                width: 50px;
                height: 50px;
            }
        }
        .top-title {
            color: ${COLORS.grey_text};
            font-size: 14px;
            text-align: center;
            margin-bottom: 10px;
        }
        .title {
            color: ${COLORS.red};
            font-weight: bold;
            font-size: 17px;
            text-align: center;
            margin-bottom: 30px;
        }
    }
    .input-wrapper {
        margin-bottom: 10px;
    }
    .signup-wrapper {
        margin-top: 10px;
        font-size: 15px;
        text-align: center;
    }
`;

const Index = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const checkInput = (e) => {
        if (!id) {
            alert("아이디를 입력해주세요");
        } else if (!password) {
            alert("패스워드를 입력해주세요!");
        } else {
            alert("로그인 완료!");
        }
    };
    return (
        <MainWrapper>
            <div className="title">
                <div className="logo-img">
                    <img src={logo} alt="에브리타임 로고" />
                </div>
                <p className="top-title">대학 생활을 더 편하고 즐겁게</p>
                <p className="title">에브리타임</p>
            </div>
            <div className="input-wrapper">
                <MainInput type="text" onChange={onChangeId} placeholder="아이디" />
            </div>
            <div className="input-wrapper">
                <MainInput type="password" onChange={onChangePassword} placeholder="비밀번호" />
            </div>
            <MainButton text="에브리타임 로그인" onClick={checkInput} />
            <Link to="/signup">
                <p className="signup-wrapper">회원가입</p>
            </Link>
        </MainWrapper>
    );
};
export default Index;
