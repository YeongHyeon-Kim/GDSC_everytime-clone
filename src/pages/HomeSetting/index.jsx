import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../../components/Colors";

const HomeSettingWrapper = styled.div`
    .select-wrapper {
        border-radius: 5px;
        border: 1px solid ${COLORS.grey_600};
    }
    .select-item {
        input[type="checkbox"] {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 100%;
            border: 1px solid ${COLORS.red};
        }
        input[type="checkbox"]:checked {
            display: inline-block;
            width: 12px;
            height: 12px;
            background-color: ${COLORS.red};
        }
    }
`;

const Index = () => {
    const [setting, setSetting] = useState({
        isMine: false,
        isHot: false,
        isRealtime: false,
    });

    const onChangeCheck = (e) => {
        if (e.target.checked) {
            const newObj = { ...setting, [e.target.name]: true };
            window.localStorage.setItem("setting", JSON.stringify(newObj));
            setSetting(newObj);
        } else {
            const newObj = { ...setting, [e.target.name]: false };
            window.localStorage.setItem("setting", JSON.stringify(newObj));
            setSetting(newObj);
        }
    };

    useEffect(() => {
        const storage = JSON.parse(window.localStorage.getItem("setting"));
        setSetting({
            isMine: storage.isMine,
            isHot: storage.isHot,
            isRealtime: storage.isRealtime,
        });
    }, []);

    return (
        <HomeSettingWrapper>
            <div>navigation</div>
            <div className="select-wrapper">
                <div className="select-item">
                    <input type="checkbox" name="isMine" id="isMine" checked={setting.isMine} onChange={onChangeCheck} />
                    <label htmlFor="isMine">즐겨찾는 게시판</label>
                </div>
                <div className="select-item">
                    <input type="checkbox" name="isHot" id="isHot" checked={setting.isHot} onChange={onChangeCheck} />
                    <label htmlFor="isHot">HOT 게시판</label>
                </div>
                <div className="select-item">
                    <input type="checkbox" name="isRealtime" id="isRealtime" checked={setting.isRealtime} onChange={onChangeCheck} />
                    <label htmlFor="isRealtime">실시간 게시판</label>
                </div>
            </div>
        </HomeSettingWrapper>
    );
};

export default Index;
