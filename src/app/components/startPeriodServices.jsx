import React from "react";
import PropTypes from "prop-types";
export default function StartPeriodsServices({ periodsServices }) {
    const arr = [
        "Янв",
        "Фев",
        "Марта",
        "Апр",
        "Мая",
        "Июня",
        "Июля",
        "Авг",
        "Сен",
        "Ноября",
        "Дек"
    ];
    const newPeriodsServices = [];
    periodsServices.map((ser) => newPeriodsServices.push(ser.period.start));
    const date = newPeriodsServices.sort()[0].split(".");
    const dataRender = new Date(date[2], date[1] - 1, date[0]);
    const servicesStartMonth = arr[dataRender.getMonth()];
    const servicesStartDay = dataRender.getDate();
    return (
        <div>
            <span className="widget-49-date-day">{servicesStartDay}</span>
            <span className="widget-49-date-month">{servicesStartMonth}</span>
        </div>
    );
}
StartPeriodsServices.propTypes = {
    periodsServices: PropTypes.array
};
