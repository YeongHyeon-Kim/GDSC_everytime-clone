import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../components/Colors";
import PopularItem from "./BoardItem";
import vectorRight from "../../assets/vector/vectorRight.svg";

const BoardContainer = styled.div`
    border-style: solid;
    border-width: 2px;
    border-color: ${COLORS.grey_light};
    border-radius: 5%;
    margin-top: 15px;
    .popular-container {
        margin: 10px;
        .popular-title {
            display: flex;
            justify-content: space-between;
            margin-left: 3px;
            margin-bottom: 5px;
            margin-right: 5px;
            .title-text {
                font-size: 15px;
            }

            .show-more {
                display: flex;
                margin-bottom: 10px;
                align-items: center;
                .show-more-text {
                    font-size: 12px;
                    color: ${COLORS.red};
                }

                img {
                    width: 10px;
                    height: 10px;
                    filter: invert(17%) sepia(50%) saturate(4556%) hue-rotate(354deg) brightness(109%) contrast(90%);
                }
            }
        }
    }
`;

const BoardWrapper = ({ boardList, title }) => {
    return (
        <BoardContainer>
            <div className="popular-container">
                <div className="popular-title">
                    <p className="title-text">{title}</p>
                    <Link className="show-more" to="/board">
                        <p className="show-more-text">더 보기</p>
                        <img src={vectorRight} alt="더 보기 화살표" />
                    </Link>
                </div>

                <div>
                    {boardList.map((board, index) => (
                        <PopularItem boardItem={board} />
                    ))}
                </div>
            </div>
        </BoardContainer>
    );
};

export default BoardWrapper;
