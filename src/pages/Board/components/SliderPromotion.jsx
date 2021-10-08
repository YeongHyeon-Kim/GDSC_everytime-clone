import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";

import BoardItem from "../../../components/Board/BoardItem";
import BoardWrapper from "../../../components/Board/BoardWrapper";

import { dummyBoard } from "../../../components/dummyData";

const PromotionWrapper = styled.div``;

const SliderPromotion = () => {
    return (
        <PromotionWrapper>
            <BoardWrapper boardList={dummyBoard} title="인기 게시물" />
            <BoardWrapper boardList={dummyBoard} title="홍보 게시판" />
        </PromotionWrapper>
    );
};

export default SliderPromotion;
