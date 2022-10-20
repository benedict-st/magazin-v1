import React from "react";
import PropTypes from "prop-types";
import PeriodService from "./periodService";
export default function PeriodsServicesList({ periodsServices }) {
    return (
        <>
            {periodsServices.map((period) => (
                <PeriodService key={period._id} {...period} />
            ))}
        </>
    );
}

PeriodsServicesList.propTypes = {
    periodsServices: PropTypes.array
};
