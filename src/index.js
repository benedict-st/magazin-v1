import React from "react";
import ReactDOM from "react-dom";
import "../src/app/style/style.css";
import "../src/app/style/stylecard.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
