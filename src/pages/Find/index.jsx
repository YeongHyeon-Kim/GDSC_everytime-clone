import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../components/Colors";
import MainInput from "../../components/Input/MainInput";
import Arrow from "../../assets/vector/arrow.svg";
import Search from "../../assets/nav/search.svg";
import { Link } from "react-router-dom";

const SearchWrapper = styled.div`
    .search-input {
        top: 10px;
        position: fixed;
        width: 100%;
        max-width: 500px;
        display: flex;
        background-color: ${COLORS.grey_300};
        align-items: center;
        border-radius: 5px;
        img {
            width: 15px;
            height: 15px;
            margin-left: 10px;
            margin-right: 10px;
            /* transform: rotate(180deg); */
        }
    }

    .find-result {
        align-items: center;
        top: 50px;
        position: fixed;
        width: 100%;
        max-width: 500px;
        text-align: center;
        img {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
        }
        .text {
            font-size: 15px;
            color: ${COLORS.grey_text};
        }
    }
`;

const Index = () => {
    return (
        <SearchWrapper>
            <div className="search-input">
                <Link to="/">
                    <img src={Arrow} style={{ transform: "rotate(180deg)" }} alt="뒤로가기 버튼" />
                </Link>
                <MainInput style={{ borderRadius: 0 }} placeholder="글 제목, 내용, 해시태그" />
                <button onClick={() => alert("검색 기능은 백엔드 연동 이후 완성될 예정입니다.")}>
                    <img src={Search} alt="검색 버튼" />
                </button>
            </div>
            <div className="find-result">
                <img src={Search} alt="검색 이미지" />
                <p className="text">전체 게시판의 글을 검색해보세요</p>
            </div>
        </SearchWrapper>
    );
};

export default Index;
