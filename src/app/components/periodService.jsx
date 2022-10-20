import React from "react";
import PropTypes from "prop-types";
export default function PeriodService({ period, name, _id }) {
    return (
        <>
            <span>
                <p>
                    <i className="bi bi-clock"></i> {name}: c {period.start} по{" "}
                    {period.end}
                </p>
            </span>
        </>
    );
}
PeriodService.propTypes = {
    period: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};
