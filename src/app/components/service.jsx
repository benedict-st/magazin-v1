import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import api from "../api";
import SpinnerRender from "./spinnerRender";
import PeriodsServicesList from "./periodsServicesList";

export default function Service({ match }) {
    const serviceId = match.params.serviceId;
    const history = useHistory();
    const [service, setService] = useState();

    useEffect(() => {
        api.services.getById(serviceId).then((data) => setService(data));
    });
    const handleClick = () => {
        history.push("/");
    };
    if (service) {
        return (
            <>
                <div className="container  p-3">
                    <div className="row justify-content-center">
                        <div className="card p-2  mb-3">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {service.service}
                                </h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    Подробная информация{": "}
                                    <p>
                                        {service.totalHours.title}{" "}
                                        {service.totalHours.value}
                                    </p>
                                    <p>
                                        {service.drivingHours.title}
                                        {service.drivingHours.value}
                                    </p>
                                    <p>
                                        {service.drivingHours.title}
                                        {service.drivingHours.value}
                                    </p>
                                    <p>
                                        {service.resourceHours.title}
                                        {service.resourceHours.value}
                                    </p>
                                    <span
                                        style={{
                                            color: "#000000",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {" "}
                                        Расписание групп:
                                    </span>
                                    <PeriodsServicesList
                                        periodsServices={service.period}
                                    />
                                    <p>
                                        Цена
                                        {service.price} рублей
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button
                            className="btn btn-warning"
                            onClick={handleClick}
                        >
                            Показать все услуги
                        </button>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <SpinnerRender />
            </>
        );
    }
}

Service.propTypes = {
    match: PropTypes.object,
    serviceId: PropTypes.string.isRequired
};
