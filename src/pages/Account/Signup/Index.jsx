import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { COLORS } from "../../../components/Colors";
import MainInput from "../../../components/Input/MainInput";
import MainButton from "../../../components/Button/MainButton";
import xVector from "../../../assets/vector/xVector.svg";

const MainWrapper = styled.div`
    margin: 10px;
    .title {
        display: flex;
        margin-bottom: 30px;
        justify-content: space-between;
        .title-text {
            font-size: 15px;
        }
        img {
            width: 15px;
            height: 15px;
        }
    }

    .input-wrapper {
        margin-bottom: 20px;
        .text {
            font-size: 8px;
            margin-bottom: 5px;
        }
    }
`;

const Index = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [major, setMajor] = useState("");

    const [errorNum, setErrorNum] = useState(false);
    // error 1 -> password error, 2 -> id, error 3 -> password check error
    const onChangeId = (e) => {
        const { value } = e.target;
        if (value.length < 4) {
            setErrorNum(2);
        } else {
            setErrorNum(0);
        }
        setId(value);
    };

    const onChangePassword = (e) => {
        const patternSpecial = /[~!@#$%^&*()_+|<>?:{}]/;
        const patternEng = /[a-zA-Z]/;
        const patternNum = /[0-9]/;

        const { value } = e.target;

        if (!patternSpecial.test(value) || !patternEng.test(value) || !patternNum.test(value)) {
            setErrorNum(1);
        } else {
            setErrorNum(0);
        }
        setPassword(value);
    };

    const onChangeRePassword = (e) => {
        const { value } = e.target;
        if (!(value === password)) {
            setErrorNum(3);
        } else {
            setErrorNum(0);
        }

        setRePassword(value);
    };
    //백엔드 후 확인할 값들 -----------------
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };
    const onChangeMajor = (e) => {
        setMajor(e.target.value);
    };

    const checkAll = (e) => {
        if (errorNum !== 0) {
            if (errorNum === 1) {
                alert("패스워드 조건이 맞지 않습니다.");
            } else if (errorNum === 2) {
                alert("아이디 조건이 맞지 않습니다.");
            } else if (errorNum === 3) {
                alert("패스워드가 일치하지 않습니다.");
            }
        } else {
            if (!id) {
                alert("아이디를 입력해주세요");
            } else if (!password) {
                alert("패스워드를 입력해주세요");
            } else if (!repassword) {
                alert("패스워드를 재입력해주세요");
            } else if (!name) {
                alert("이름을 입력해주세요");
            } else if (!email) {
                alert("이메일을 입력해주세요");
            } else if (!nickname) {
                alert("닉네임을 입력해주세요");
            } else if (!major) {
                alert("전공을 입력해주세요");
            } else {
                alert("회원가입 완료!");
            }
        }
    };
    // ------------------------------
    return (
        <MainWrapper>
            <div className="title">
                <p className="title-text">회원가입</p>
                <Link to="/login">
                    <img src={xVector} alt="취소버튼" />
                </Link>
            </div>
            <div className="input-wrapper">
                <p className="text">아이디</p>
                <MainInput value={id} type="text" onChange={onChangeId} placeholder="아이디를 입력해주세요." />
                {errorNum === 2 && (
                    <span style={{ color: "red" }}>&nbsp;&nbsp;&nbsp;&nbsp;Id는 4자 이상, 영어 숫자로만 작성되어야 합니다.</span>
                )}
            </div>
            <div className="input-wrapper">
                <p className="text">비밀번호</p>
                <MainInput value={password} type="password" onChange={onChangePassword} placeholder="비밀번호를 입력해주세요." />
                {errorNum === 1 && <span style={{ color: "red" }}>&nbsp;&nbsp;&nbsp;&nbsp;비밀번호가 조건에 맞지 않습니다.</span>}
            </div>
            <div className="input-wrapper">
                <p className="text">비밀번호 확인</p>
                <MainInput value={repassword} type="password" onChange={onChangeRePassword} placeholder="비밀번호를 다시 입력해주세요." />
                {errorNum === 3 && <span style={{ color: "red" }}>&nbsp;&nbsp;&nbsp;&nbsp;비밀번호가 일치하지 않습니다.</span>}
            </div>
            <div className="input-wrapper">
                <p className="text">이름</p>
                <MainInput value={name} type="text" onChange={onChangeName} placeholder="이름를 입력해주세요." />
            </div>
            <div className="input-wrapper">
                <p className="text">이메일</p>
                <MainInput value={email} type="text" onChange={onChangeEmail} placeholder="이메일을 입력해주세요." />
            </div>
            <div className="input-wrapper">
                <p className="text">닉네임</p>
                <MainInput value={nickname} type="text" onChange={onChangeNickname} placeholder="닉네임을 입력해주세요." />
            </div>
            <div className="input-wrapper">
                <p className="text">전공</p>
                <MainInput value={major} type="text" onChange={onChangeMajor} placeholder="전공을 입력해주세요." />
            </div>
            <MainButton text="회원가입" onClick={checkAll} />
        </MainWrapper>
    );
};

export default Index;
