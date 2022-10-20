import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./layouts/login";
import Basket from "./layouts/basket";
import Main from "./layouts/main";
import NavBar from "./components/navBar";
import Service from "./components/service";

function App() {
    return (
        <>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/basket" exact component={Basket} />
                    <Route path="/login" component={Login} />
                    <Route
                        path="/services/:serviceId?"
                        render={(props) => <Service {...props} />}
                    />
                </Switch>
            </div>
        </>
    );
}
export default App;
