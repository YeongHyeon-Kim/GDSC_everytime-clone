import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../components/Colors";
import { Link } from "react-router-dom";
import xVector from "../../assets/vector/xVector.svg";
import camera from "../../assets/icon/camera.svg";
import checked from "../../assets/vector/checked.svg";
const PostWraaper = styled.div`
    padding: 10px;

    .main-top {
        position: fixed;
        width: 90%;
        max-width: 500px;
        display: flex;
        justify-content: space-between;
        align-content: center;

        .top-left {
            display: flex;
            .top-text {
                margin-left: 30px;
                .top-board-text {
                    font-size: 18px;
                }
            }
            img {
                width: 20px;
                height: 20px;
                transform: rotate(180deg);
            }
        }
        button {
            border-radius: 10px;
            background-color: ${COLORS.red};
            width: 35px;
            .complete-text {
                color: white;
                font-size: 12px;
                text-align: center;
            }
        }
        img {
            width: 20px;
            height: 20px;
        }
    }
    textarea {
        margin-top: 40px;
        width: 100%;
        height: 550px;
        display: inline;
    }
    .bottom {
        bottom: 5px;
        position: fixed;
        width: 90%;
        max-width: 500px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        .input-file-button {
            img {
                width: 15px;
                height: 15px;
            }
        }
        button {
            display: flex;
            img {
                width: 12px;
                height: 12px;
                margin-right: 3px;
            }
            .text {
                font-size: 10px;
                color: ${(props) => (props.anonymous ? COLORS.red : COLORS.grey_text)};
            }
        }
    }
`;

const Index = () => {
    const [content, setContent] = useState("");
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const [anonymous, setAnonymous] = useState(false);
    const onChangeAnonymous = (e) => {
        setAnonymous(anonymous ? false : true);
    };
    console.log(anonymous);
    return (
        <PostWraaper anonymous={anonymous}>
            <div className="main-top">
                <div className="top-left">
                    <Link to={"/board"}>
                        <img src={xVector} alt="뒤로가기" />
                    </Link>
                    <div className="top-text">
                        <p className="top-board-text">글 쓰기</p>
                    </div>
                </div>
                <button onClick={() => alert("글 작성 완료!!")}>
                    <p className="complete-text">완료</p>
                </button>
            </div>
            <textarea id={content} placeholder="내용을 입력하세요" onChange={onChangeContent} />
            <div className="bottom">
                <label className="input-file-button" for="input-file">
                    <img src={camera} alt="사진 첨부" />
                </label>
                <input type="file" id="input-file" style={{ display: "none" }} />
                <button onClick={onChangeAnonymous}>
                    <img src={checked} alt="익명선택" />
                    <p className="text">익명</p>
                </button>
            </div>
        </PostWraaper>
    );
};

export default Index;
