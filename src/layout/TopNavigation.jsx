import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "../components/Colors";

import Arrow from "../assets/vector/arrow.svg";
import Search from "../assets/nav/search.svg";

const TopNavigationWraaper = styled.div`
    .main-top {
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;
        .top-left {
            display: flex;
            .top-text {
                margin-left: 30px;

                .top-board-text {
                    font-size: 13px;
                }
                .top-board-GDSC {
                    color: ${COLORS.grey_text};
                    font-size: 13px;
                }
            }
            img {
                width: 20px;
                height: 20px;
                transform: rotate(180deg);
            }
        }
        img {
            width: 20px;
            height: 20px;
        }
    }
`;

const TopNavigation = ({ title, title2 }) => {
    return (
        <TopNavigationWraaper>
            <div className="main-top">
                <div className="top-left">
                    <Link to={"/board"}>
                        <img src={Arrow} alt="뒤로가기" />
                    </Link>
                    <div className="top-text">
                        <p className="top-board-text">{title}</p>
                        <p className="top-board-GDSC">{title2}</p>
                    </div>
                </div>
                <Link to={"/search"}>
                    <img src={Search} alt="검색" />
                </Link>
            </div>
        </TopNavigationWraaper>
    );
};

export default TopNavigation;
