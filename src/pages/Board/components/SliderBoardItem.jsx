import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import pinOff from "../../../assets/icon/pinOff.svg";
import pinOn from "../../../assets/icon/pinOn.svg";

const SliderBoardItemWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
    height: max-content;
    img {
        height: 15px;
        width: 15px;
        margin-left: 5px;
        margin-right: 10px;
    }
    .board-title {
        font-weight: 400;
        font-size: 15px;
    }
`;

const SliderBoardItem = ({ board }) => {
    const [pin, isSelected] = useState(board.isOn);
    const onChangePin = (e) => {
        isSelected(pin ? false : true);
    };
    return (
        <SliderBoardItemWrapper>
            {/* <button onClick={() => (board.isOn = !!!board.isOn)}> */}
            <button onClick={onChangePin}>
                <img src={pin ? pinOn : pinOff} alt="핀" />
            </button>
            <Link to={`/board/list/${board.link}`}>
                <p className="board-title">{board.title}</p>
            </Link>
        </SliderBoardItemWrapper>
    );
};

export default SliderBoardItem;
