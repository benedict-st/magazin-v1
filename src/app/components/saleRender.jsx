import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Fire from "../img/fire.svg";
export default function SaleRender({ item }) {
    return (
        <>
            {item.sale === "да" ? (
                <div className="d-flex flex-row-reverse  p-6">
                    <div className="">
                        <span className="my-card-title">
                            <Link to={`services/${item._id}`}>
                                {item.service}
                            </Link>
                        </span>
                        <span className="badge rounded-pill bg-warning text-dark card-sale">
                            <img src={Fire} alt="picture" />
                        </span>
                    </div>
                </div>
            ) : (
                <div className="d-flex flex-row-reverse p-2">
                    <span className="my-card-title">
                        <Link to={`services/${item._id}`}>{item.service}</Link>
                    </span>
                </div>
            )}
        </>
    );
}

SaleRender.propTypes = {
    item: PropTypes.oneOfType([PropTypes.object])
};
