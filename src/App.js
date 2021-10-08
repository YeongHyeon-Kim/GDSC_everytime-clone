import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Board from "./pages/Board";
import Message from "./pages/Message";
import DetailMessage from "./pages/MessageDetail";
import Signup from "./pages/Account/Signup";
import Login from "./pages/Account/Login";
import MyPage from "./pages/Mypage/Main";
import Auth from "./pages/Mypage/Auth/Main";
import AuthDetail from "./pages/Mypage/Auth/Detail";
import EditDetail from "./pages/Mypage/EditDetail";
import HomeSetting from "./pages/HomeSetting";
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/board" component={Board} />
                <Route exact path="/message" component={Message} />
                <Route exact path="/message/:no" component={DetailMessage} />
                <Route exact path="/mypage" component={MyPage} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/mypage/auth" component={Auth} />
                <Route exact path="/mypage/auth/detail" component={AuthDetail} />
                <Route exact path="/mypage/edit" component={EditDetail} />
                <Route exact path="/homeset" component={HomeSetting} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
