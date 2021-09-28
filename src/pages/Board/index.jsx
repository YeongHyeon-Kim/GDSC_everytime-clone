import React from "react";

import styled from "styled-components";

import BottomNavigation from "../../layout/BottomNavigation";

const Index = () => {
    return (
        <div className="bottom-navigation">
            <BottomNavigation activeNum={2} />
        </div>
    );
};

export default Index;
