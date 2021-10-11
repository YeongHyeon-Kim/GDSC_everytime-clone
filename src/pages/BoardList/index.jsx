import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dummyBoardList } from "../../components/dummyData";
import { COLORS } from "../../components/Colors";

import pencil from "../../assets/icon/pencil.svg";

import like from "../../assets/icon/like.png";
import comment from "../../assets/icon/comment.png";
import TopNavigation from "../../layout/TopNavigation";

const BoardListContainer = styled.div`
    margin: 10px;
    .board-list-item {
        margin: 10px;
        border-bottom: 1px;
        border-bottom-color: ${COLORS.grey_400};
        border-bottom-style: solid;
        padding-bottom: 20px;
        .item-title {
            font-size: 10px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        .item-content {
            font-size: 10px;
            margin-bottom: 5px;
        }
        .item-state {
            display: flex;
            align-items: center;

            float: right;

            .like-text {
                font-size: 7px;
                color: ${COLORS.red};
                margin-left: 2px;
            }
            .comment-text {
                font-size: 7px;
                color: ${COLORS.green};
                margin-left: 2px;
            }
            img {
                width: 7px;
                height: 7px;
                margin-left: 4px;
            }
        }
    }
    .write-button-wrapper {
        background-color: ${COLORS.grey_dark};
        border-radius: 20px;
        display: flex;
        align-items: center;
        bottom: 10px;
        position: fixed;
        height: 36px;
        width: 80px;
        left: calc(50% - 36px);

        img {
            margin-left: 10px;
            width: 15px;
            height: 15px;
        }
        p {
            margin-left: 5px;
            font-size: 13px;
            font-weight: bold;
        }
    }
`;

const BoardList = () => {
    const board = dummyBoardList;
    return (
        <BoardListContainer>
            <TopNavigation title="게시판" title2="GDSC" />
            {/* {boardList.map((board, index) => ( */}
            <Link to={`/board/detail/${board.num}`}>
                <div className="board-list-item">
                    <p className="item-title">{board.title}</p>
                    <p className="item-content">{board.content}</p>
                    <div className="item-state">
                        <img src={like} alt="좋아요" />
                        <p className="like-text">{board.like}</p>
                        <img src={comment} alt="댓글 수" />
                        <p className="comment-text">{board.comments}</p>
                    </div>
                </div>
            </Link>
            {/* ))
            } */}

            <Link to="/board/post">
                <div className="write-button-wrapper">
                    <img src={pencil} alt="글쓰기 버튼" />
                    <p>글 쓰기</p>
                </div>
            </Link>
        </BoardListContainer>
    );
};

export default BoardList;
