import React, { useState } from "react";
import Modal from "react-modal";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../components/Colors";
import Arrow from "../../../assets/vector/arrow.svg";
import Temp from "../../../assets/img/temp.png";
import { dummyMypage } from "../../../components/dummyData";
import { customStyle } from "../../../components/modalOption";

const MyPageMainWrapper = styled.div`
    margin: 10px;
    .main-top {
        display: flex;
        margin-bottom: 10px;
        .top-text {
            margin-left: 10px;
            font-size: 20px;
        }
        img {
            width: 20px;
            height: 20px;
            transform: rotate(180deg);
        }
    }
    .main-profile {
        border-radius: 5%;
        border-style: solid;
        border-width: 2px;
        border-color: ${COLORS.grey_dark};
        padding: 5px;
        display: flex;
        align-items: center;
        .item {
            .id {
                font-size: 12px;
                margin-bottom: 5px;
            }
            .detail {
                font-size: 11px;
                color: ${COLORS.grey_text};
                margin-bottom: 3px;
            }
        }
        img {
            width: 50px;
            height: 50px;
            border-radius: 5%;
            margin: 10px;
        }
    }

    .main-setting {
        border-radius: 5%;
        border-style: solid;
        border-width: 2px;
        border-color: ${COLORS.grey_dark};
        padding: 15px;
        align-items: center;
        .setting-top {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .setting-item {
            font-size: 14px;
            margin-bottom: 10px;
        }
    }
`;

const ModalWrapper = styled.div`
    .modal-container {
        padding: 10px;
        .text {
            font-size: 15px;

            align-items: center;
        }
        .button-container {
            display: flex;
            justify-content: right;

            button {
                color: ${COLORS.red};
                margin-left: 5px;
                font-size: 14px;
            }
        }
    }
`;

const Index = () => {
    const dummy = dummyMypage;

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    return (
        <MyPageMainWrapper>
            <div className="main-top">
                <Link className="back" to="/">
                    <img src={Arrow} alt="뒤로가기 버튼" />
                </Link>
                <p className="top-text" alt="내 정보">
                    내 정보
                </p>
            </div>
            <div className="main-profile">
                <img src={Temp} alt="프로필 사진" />
                <div className="item">
                    <p className="id" alt="아이디">
                        {dummy.id}
                    </p>
                    <p className="detail" alt="자세한 정보">
                        {dummy.name}/ {dummy.nickname}
                    </p>
                    <p className="detail" alt="자세한 정보">
                        {dummy.detail}
                    </p>
                </div>
            </div>
            <div className="main-setting">
                <p className="setting-top">계정</p>
                <Link to="/mypage/auth">
                    <p className="setting-item">학교 인증</p>
                </Link>
                <Link to="/mypage/edit">
                    <p className="setting-item">닉네임 변경</p>
                </Link>
                <div>
                    <button className="setting-item" onClick={openModal}>
                        회원 탈퇴
                    </button>
                </div>

                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    ariaHideApp={false}
                    contentLabel="회원탈퇴 버튼"
                    style={customStyle}
                >
                    <ModalWrapper>
                        <div className="modal-container">
                            <p className="text">정말로 탈퇴하시겠습니까? 탈퇴를 하게 되면 귀하의 정보는 폐기되며 복구가 불가능합니다.</p>
                            <div className="button-container">
                                <button onClick={() => setIsOpen(false)}>취소</button>
                                <button onClick={() => alert("회원탈퇴 예정")}>확인</button>
                            </div>
                        </div>
                    </ModalWrapper>
                </Modal>
                <Link to="/">
                    <p className="setting-item">로그아웃</p>
                </Link>
            </div>
        </MyPageMainWrapper>
    );
};

export default Index;
