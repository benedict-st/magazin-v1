import React from "react";
import { Link } from "react-router-dom";
import Basket from "../img/basket.png";
import User from "../img/user.png";
import Logo from "../img/logo.png";

export default function NavBar() {
    return (
        <div>
            <div className="container">
                <div className="section">
                    <div className="header">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <Link
                                to="/"
                                className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
                            >
                                <img
                                    src={Logo}
                                    alt="user"
                                    width="32"
                                    height="32"
                                    className="rounded-circle"
                                />
                            </Link>

                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li>
                                    <Link
                                        href="#"
                                        className="nav-link px-2 link-secondary"
                                    >
                                        Serves1
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="nav-link px-2 link-dark"
                                    >
                                        Serves1
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="nav-link px-2 link-dark"
                                    >
                                        Serves1
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="nav-link px-2 link-dark"
                                    >
                                        Serves1
                                    </Link>
                                </li>
                            </ul>

                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Search..."
                                    aria-label="Search"
                                />
                            </form>

                            <div className="dropdown text-end">
                                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                    <li>
                                        <Link
                                            to="/login"
                                            className="d-block link-dark text-decoration-none"
                                        >
                                            <img
                                                src={User}
                                                alt="user"
                                                width="32"
                                                height="32"
                                                className="rounded-circle"
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/basket"
                                            className="d-block link-dark text-decoration-none"
                                        >
                                            <img
                                                src={Basket}
                                                alt="shoppingcart"
                                                width="32"
                                                height="32"
                                                className="rounded-circle"
                                            />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
