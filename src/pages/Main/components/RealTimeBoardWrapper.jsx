import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import RealTimeBoardItem from "./RealTimeBoardItem";

const RealTimeBoardContainer = styled.div`
    border-style: solid;
    border-width: 2px;
    border-color: ${COLORS.grey_light};
    border-radius: 5%;
    margin-top: 15px;
    .real-time-board-title {
        font-size: 15px;
        margin: 10px;
    }
`;

const RealTimeBoardWrapper = ({ boardList }) => {
    return (
        <RealTimeBoardContainer>
            <p className="real-time-board-title">실시간 인기글</p>
            <div>
                {boardList.map((board, index) => (
                    <RealTimeBoardItem boardItem={board} />
                ))}
            </div>
        </RealTimeBoardContainer>
    );
};

export default RealTimeBoardWrapper;
