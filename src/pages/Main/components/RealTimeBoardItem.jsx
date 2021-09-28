import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import like from "../../../assets/icon/like.png";
import comment from "../../../assets/icon/comment.png";
import defaultProfile from "../../../assets/img/temp.png";

const RealTimeBoardItemWrapper = styled.div`
    margin: 10px;

    .item-top-nav {
        display: flex;
        img {
            width: 15px;
            height: 15px;
        }
        .item-nick {
            font-size: 13px;
            margin-left: 10px;
            margin-bottom: 10px;
        }
        .item-date {
            font-size: 10px;
            margin-left: auto;
            color: ${COLORS.grey_text};
        }
    }
    .item-title {
        font-weight: bold;
        font-size: 10px;
        margin-bottom: 3px;
    }
    .item-content {
        font-size: 10px;
        margin-bottom: 5px;
    }
    .item-bottom-nav {
        display: flex;
        justify-content: space-between;
        .item-category {
            font-size: 7px;
            color: ${COLORS.grey_text};
        }
        .item-state {
            display: flex;
            align-items: center;
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

const RealTimeBoardItem = ({ boardItem }) => {
    return (
        <RealTimeBoardItemWrapper>
            <Link className="real-time-board-wrapper" to={"/board/detail/"}>
                <div className="item-top-nav">
                    {/* <img src={boardItem.profileUrl ? boardItem.profileUrl : { defaultProfile }} alt="작성자 프로필" /> */}
                    <img src={defaultProfile} alt="작성자 프로필" />
                    <p className="item-nick">{boardItem.nick}</p>
                    <p className="item-date">{boardItem.date}</p>
                </div>
                <p className="item-title">{boardItem.title}</p>
                <p className="item-content">{boardItem.contents}</p>
                <div className="item-bottom-nav">
                    <p className="item-category">{boardItem.category}</p>
                    <div className="item-state">
                        <img src={like} alt="좋아요" />
                        <p className="like-text">{boardItem.like}</p>
                        <img src={comment} alt="댓글 수" />
                        <p className="comment-text">{boardItem.comments}</p>
                    </div>
                </div>
            </Link>
        </RealTimeBoardItemWrapper>
    );
};

export default RealTimeBoardItem;
