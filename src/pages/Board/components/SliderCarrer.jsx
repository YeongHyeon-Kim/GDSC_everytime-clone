import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";

import BoardItem from "../../../components/Board/BoardItem";
import BoardWrapper from "../../../components/Board/BoardWrapper";

import { dummyBoard } from "../../../components/dummyData";

const CarrerWrapper = styled.div``;

const SliderCarrer = () => {
    return (
        <CarrerWrapper>
            <BoardWrapper boardList={dummyBoard} title="인기 게시물" />
            <BoardWrapper boardList={dummyBoard} title="공기업 게시판" />
        </CarrerWrapper>
    );
};

export default SliderCarrer;
