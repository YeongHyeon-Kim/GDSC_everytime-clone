import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Board from "./pages/Board";
import Message from "./pages/Message";
import DetailMessage from "./pages/MessageDetail";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/board" component={Board} />
                <Route exact path="/message" component={Message} />
                <Route exact path="/message/:no" component={DetailMessage} />

                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
