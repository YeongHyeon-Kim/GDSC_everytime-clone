import React from "react";
import styled from "styled-components";
import { COLORS } from "../components/Colors";
import { dummyComments } from "../components/dummyData";
import profile from "../assets/img/temp.png";

const CommentWrapper = styled.div`
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: ${COLORS.grey_400};
    padding-top: 5px;
    margin-top: 10px;
    .top {
        margin-left: 10px;
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        img {
            width: 15px;
            height: 15px;
            margin-right: 5px;
            border-radius: 5px;
        }
        .author {
            font-size: 12px;
            font-weight: bold;
        }
    }
    .comment-contet {
        margin-left: 10px;
        font-size: 12px;
        margin-bottom: 5px;
    }
    .date {
        margin-left: 10px;
        color: ${COLORS.grey_text};
        font-size: 10px;
    }
`;

const Comments = () => {
    return (
        <div>
            {dummyComments.map((comment, index) => (
                <CommentWrapper>
                    <div className="top">
                        <img src={profile} alt="프로필 사진" />
                        <p className="author">익명</p>
                    </div>
                    <div className="comment-contet">{comment.content}</div>
                    <div className="date">{comment.date}</div>
                </CommentWrapper>
            ))}
        </div>
    );
};

export default Comments;
