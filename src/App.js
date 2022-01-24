import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./componets/ui/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import UserEditPage from "./componets/page/userEditPage";

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:id/edit" component={UserEditPage} />
                <Route path="/users/:id" component={Users} />
                <Route path="/users" component={Users} />
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
