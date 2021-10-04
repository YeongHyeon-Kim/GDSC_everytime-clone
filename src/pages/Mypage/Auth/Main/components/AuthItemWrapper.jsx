import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../../../components/Colors";

const AuthItemContainer = styled.button`
    width: calc(100% - 10px);
    border-radius: 5px;
    background-color: ${COLORS.grey_dark};

    .item-title {
        margin: 10px;
        font-size: 13px;
        font-weight: bold;
    }
    .item-detail {
        margin: 10px;
        font-size: 12px;
        color: ${COLORS.grey_text};
    }
`;

const AuthItemWrapper = ({ auth }) => {
    return (
        <Link to={`auth/${auth.url}`}>
            <AuthItemContainer>
                <p className="item-title">{auth.title}</p>
                <p className="item-detail">{auth.detail}</p>
            </AuthItemContainer>
        </Link>
    );
};

export default AuthItemWrapper;
