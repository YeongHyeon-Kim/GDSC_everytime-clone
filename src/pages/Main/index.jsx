import React, { useEffect, useState } from "react";

import styled from "styled-components";
import BottomNavigation from "../../layout/BottomNavigation";

import { Link, useHistory } from "react-router-dom";
import { COLORS } from "../../components/Colors";

import gdsc from "../../assets/icon/google.svg";
import google from "../../assets/icon/google_black.svg";
import seoultech from "../../assets/icon/school.svg";
import notice from "../../assets/icon/notice.svg";

import search from "../../assets/nav/search.svg";
import mypage from "../../assets/nav/mypage.svg";
import Myboard from "./components/Myboard";

import RealTimeBoardWrapper from "./components/RealTimeBoardWrapper";

import { dummyMyboard } from "../../components/dummyData";
import { dummyRealtime } from "../../components/dummyData";
import PopularWrapper from "./components/PopularWrapper";
import { dummyHot } from "../../components/dummyData";

const MainWrapper = styled.div`
    width: 100%;
    height: calc(100%-70px);
    padding-top: 70px;
    padding-bottom: 60px;

    .main-top-navigation {
        position: fixed;
        width: 100%;
        max-width: 500px;
        top: 0px;
        height: 70px;
    }

    .top-navigation-wrapper {
        padding: 16px;
        background-color: white;

        .everytime-text {
            font-size: 10px;
            color: ${COLORS.red};
        }
        .guide-contents-container {
            margin-top: 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .h2 {
                font-size: 16px;
                font-weight: 700;
            }
            .icon-wrapper {
                height: 20px;
                img {
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                }
            }
        }
    }

    .link-list-wrapper {
        justify-content: center;
        margin-top: 12px;
        display: flex;

        .item-wrapper {
            cursor: pointer;
            align-items: center;
            margin-left: 8px;
            margin-right: 8px;
            .img_wrapper {
                background-color: ${COLORS.grey_light};
                border-radius: 100%;
                height: 40px;
                width: 40px;
                img {
                    margin: 10px;
                    height: 20px;
                    width: 20px;
                }
            }

            .text-wrapper {
                font-size: 10px;
                font-weight: 400;
                margin-block-start: 6px;
                margin-top: 6px;
                text-align: center;
                word-break: break-word;
            }
        }
    }
    .home-setting {
        margin: 10px;
        display: flex;
        height: 40px;
        background-color: ${COLORS.grey_light};
        color: ${COLORS.grey_600};
        font-size: 20px;
        border-radius: 5%;
        margin-top: 15px;
        justify-content: center;
        align-items: center;
    }
`;

const Index = () => {
    const history = useHistory();

    const onClickBtn = () => {
        history.push("/homeset");
    };

    const [setting, setSetting] = useState({
        isMine: true,
        isRealtime: true,
        isHot: true,
    });

    //setting lifecycle??? ?????? ??????
    useEffect(() => {
        const defaultSetting = { isMine: true, isRealtime: true, isHot: true };
        const storage = window.localStorage.getItem("setting");

        if (!storage) {
            //????????? ?????? ???????????????
            window.localStorage.setItem("setting", JSON.stringify(defaultSetting));
        } else {
            const storageJson = JSON.parse(storage);
            setSetting({
                isMine: storageJson.isMine,
                isHot: storageJson.isHot,
                isRealtime: storageJson.isRealtime,
            });
        }
    }, []);

    return (
        <MainWrapper>
            {/* ?????? ???????????????*/}
            <div className="main-top-navigation">
                <div className="top-navigation-wrapper">
                    <p className="everytime-text">???????????????</p>
                    <div className="guide-contents-container ">
                        <h2>GDSC ???</h2>
                        <div className="icon-wrapper">
                            <Link to="/search">
                                <img src={search} alt="?????? ?????????" />
                            </Link>
                            <Link to="/mypage">
                                <img style={{ marginLeft: 16 }} src={mypage} alt="?????? ????????? ?????????" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* ?????? ???????????? ??????*/}
            <div className="link-list-wrapper">
                <a className="item-wrapper" href="https://gdsc.community.dev/seoul-national-university-of-science-and-technology/">
                    <div className="img_wrapper">
                        <img src={gdsc} alt="GDSC seoultech ?????????" />
                    </div>
                    <p className="text-wrapper">GDSC ???</p>
                </a>
                <a className="item-wrapper" href="https://google.co.kr">
                    <div className="img_wrapper">
                        <img src={google} alt="Google ?????????" />
                    </div>
                    <p className="text-wrapper">Google</p>
                </a>
                <a className="item-wrapper" href="https://www.seoultech.ac.kr/">
                    <div className="img_wrapper">
                        <img src={seoultech} alt="??????????????????????????? ?????????" />
                    </div>
                    <p className="text-wrapper">SeoulTech</p>
                </a>
                <a className="item-wrapper" href="https://www.seoultech.ac.kr/service/info/notice/">
                    <div className="img_wrapper">
                        <img src={notice} alt="???????????? ?????????" />
                    </div>
                    <p className="text-wrapper">????????????</p>
                </a>
            </div>
            {/* ???????????? ????????? */}
            {setting.isMine && <Myboard boardList={dummyMyboard} />}
            {setting.isRealtime && <RealTimeBoardWrapper boardList={dummyRealtime} />}
            {setting.isHot && <PopularWrapper boardList={dummyHot} />}
            <Link className="home-setting-wrapper" to="/homeset">
                <p className="home-setting">??? ?????? ??????</p>
            </Link>

            <button className="home-setting-wrapper" onClick={onClickBtn}>
                <p className="home-setting">??? ?????? ??????</p>
            </button>
            {/*?????? ???????????????*/}
            <div className="bottom-navigation">
                <BottomNavigation activeNum={1} />
            </div>
        </MainWrapper>
    );
};

export default Index;
