import React, { useRef, useState } from "react";

import styled from "styled-components";
import Slider from "react-slick";
import BottomNavigation from "../../layout/BottomNavigation";

import SliderPromotion from "./components/SliderPromotion";
import SliderCarrer from "./components/SliderCarrer";
import SliderBoard from "./components/SliderBoard";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import UnderLine from "./components/UnderLine";

import { dummyPin } from "../../components/dummyData";

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
        width: 100%;
        height: calc(100% - 96px);
        margin-top: 48px;
        .slider-item {
            width: 100%;
            height: 100%;
        }
    }
    .slick-list {
        height: 100%;
        max-height: 100%;
    }
`;

const Index = () => {
    const [sliderId, setSliderid] = useState(0);
    const mySlider = useRef();

    const settings = {
        className: "slider-wrapper",
        dots: false,
        infinite: false,
        slideToShow: 1,
        slideToScroll: 1,
        afterChange: (index) => setSliderid(index),
        ref: mySlider,
    };

    const moveSlider = (index) => {
        setSliderid(index);
        mySlider.current.slickGoTo(index);
    };

    return (
        <MainWrapper>
            <div className="top-navigation arrange-center">
                <button onClick={() => moveSlider(0)}>
                    <UnderLine text="게시판" isActive={sliderId === 0} />
                </button>
                <button onClick={() => moveSlider(1)}>
                    <UnderLine text="진로" isActive={sliderId === 1} />
                </button>
                <button onClick={() => moveSlider(2)}>
                    <UnderLine text="홍보" isActive={sliderId === 2} />
                </button>
            </div>
            <Slider {...settings} edgeFriction={0}>
                <div className="slider-item">
                    <SliderBoard boardList={dummyPin} />
                </div>
                <div className="slider-item">
                    <SliderCarrer />
                </div>
                <div className="slider-item">
                    <SliderPromotion />
                </div>
            </Slider>

            <div className="bottom-navigation">
                <BottomNavigation activeNum={2} />
            </div>
        </MainWrapper>
    );
};

export default Index;
