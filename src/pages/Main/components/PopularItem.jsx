import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import like from "../../../assets/icon/like.png";
import comment from "../../../assets/icon/comment.png";

const PopularItemWrapper = styled.div`
    margin: 5px;

    .board-title {
        font-size: 13px;
    }
    .item-bottom-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item-date {
            font-size: 10px;
            color: ${COLORS.grey_text};
        }
        .item-state {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
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
`;

const PopularItem = ({ boardItem }) => {
    return (
        <PopularItemWrapper>
            <Link className="item-wrapper" to="/board/detail/">
                <p className="board-title">{boardItem.title}</p>
                <div className="item-bottom-nav">
                    <p className="item-date">{boardItem.date}</p>
                    <div className="item-state">
                        <img src={like} alt="좋아요" />
                        <p className="like-text">{boardItem.like}</p>
                        <img src={comment} alt="댓글 수" />
                        <p className="comment-text">{boardItem.comments}</p>
                    </div>
                </div>
            </Link>
        </PopularItemWrapper>
    );
};

export default PopularItem;
