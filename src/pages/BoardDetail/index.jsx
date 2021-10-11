import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../components/Colors";

import profile from "../../assets/img/temp.png";
import { dummyBoardList } from "../../components/dummyData";
import TopNavigation from "../../layout/TopNavigation";
import like from "../../assets/icon/like.png";
import comments from "../../assets/icon/comment.png";

import Comments from "../../layout/Comments";
import MainInput from "../../components/Input/MainInput";

const BoardDetailWrapper = styled.div`
    margin: 10px;
    .top-item {
        display: flex;
        margin-bottom: 15px;
        img {
            width: 30px;
            height: 30px;
            border-radius: 5px;
            margin-right: 10px;
        }
        .top-left {
            .author {
                font-size: 13px;
                font-weight: bold;
            }
            .date {
                font-size: 13px;
                color: ${COLORS.grey_text};
            }
        }
    }
    .title {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .content {
        font-size: 12px;
        margin-bottom: 15px;
    }
    .item-state {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        .like-text {
            font-size: 15px;
            color: ${COLORS.red};
            margin-left: 2px;
        }
        .comment-text {
            font-size: 15px;
            color: ${COLORS.green};
            margin-left: 2px;
        }
        img {
            width: 12px;
            height: 12px;
            margin-left: 4px;
        }
    }
    .bottom-comments {
        width: 90%;
        max-width: 500px;
        position: fixed;
        bottom: 0px;
    }
    .like-button {
        width: 130%;
        height: 20px;
        text-align: center;
        padding-top: 3px;
        background-color: ${COLORS.grey_300};
        color: ${COLORS.grey_500};
        border-radius: 5px;
        font-size: 15px;
    }
`;

const BoardDetail = () => {
    const board = dummyBoardList;

    const [comment, setComment] = useState("");

    const onChangeComments = (e) => {
        setComment(e.target.value);
    };

    return (
        <BoardDetailWrapper>
            <TopNavigation title="자유게시판" title2="GDSC" />
            <div className="top-item">
                <img src={profile} alt="프로필 사진" />
                <div className="top-left">
                    <p className="author">{board.author}</p>
                    <p className="date">{board.date}</p>
                </div>
            </div>
            <p className="title">{board.title}</p>
            <p className="content">{board.content}</p>
            <div className="item-state">
                <img src={like} alt="좋아요" />
                <p className="like-text">{board.like}</p>

                <img src={comments} alt="댓글 수" />
                <p className="comment-text">{board.comments}</p>
            </div>

            <button className="like-button-wrapper">
                <p className="like-button">공감</p>
            </button>
            <Comments />
            <div className="bottom-comments">
                <MainInput type="text" onChange={onChangeComments} placeholder="댓글을 입력해주세요" />
            </div>
        </BoardDetailWrapper>
    );
};

export default BoardDetail;
