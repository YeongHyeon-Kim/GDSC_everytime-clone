import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import vectorRight from "../../../assets/vector/vectorRight.svg";
import checked from "../../../assets/vector/checked.svg";

const MyBoardWrapper = styled.div`
    border-style: solid;
    border-width: 2px;
    border-color: ${COLORS.grey_light};
    border-radius: 5%;
    margin-top: 15px;
    .myboard-container {
        margin: 10px;

        .myboard-title-wrapper {
            display: flex;
            justify-content: space-between;

            margin-bottom: 5px;
            margin-right: 5px;
            .title-text {
                font-size: 15px;
            }

            .show-more {
                display: flex;

                margin-bottom: 10px;
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

        .myboard-item {
            display: flex;
            margin-bottom: 10px;
            margin-right: 15px;

            h1 {
                white-space: nowrap;
                font-size: 10px;
            }
            .myboard-content {
                margin-left: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 10px;
                color: ${COLORS.grey_text};
            }
            img {
                width: 10px;
                height: 10px;
                margin-left: auto;
            }
        }
    }
`;

const Myboard = ({ boardList }) => {
    return (
        <MyBoardWrapper>
            <div className="myboard-container">
                <div className="myboard-title-wrapper">
                    <p className="title-text">즐겨찾는 게시판</p>
                    <Link className="show-more" to="/board">
                        <p className="show-more-text">더 보기</p>
                        <img src={vectorRight} alt="더 보기 화살표" />
                    </Link>
                </div>
                <div>
                    {boardList.map((board, index) => (
                        <div className="myboard-item">
                            <h1>{board.category}</h1>
                            <p className="myboard-content">{board.title}</p>
                            <img src={checked} alt="확인표시" style={{ display: board.isNew ? "block" : "none" }} />
                        </div>
                    ))}
                </div>
            </div>
        </MyBoardWrapper>
    );
};

export default Myboard;
