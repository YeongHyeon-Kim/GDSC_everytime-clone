import React from "react";
import styled from "styled-components";
import SliderBoardItem from "./SliderBoardItem";
import { COLORS } from "../../../components/Colors";

const BoardWrapper = styled.div`
    border-radius: 5px;
    border-color: ${COLORS.grey_light};
    border-width: 2px;
    border-style: solid;
    padding: 5px;
    margin-top: 15px;
`;

const SliderBoard = ({ boardList }) => {
    return (
        <BoardWrapper>
            {boardList.map((board, index) => (
                <SliderBoardItem board={board} />
            ))}
        </BoardWrapper>
    );
};

export default SliderBoard;
