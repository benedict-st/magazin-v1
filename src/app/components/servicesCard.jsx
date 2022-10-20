import React from "react";
import PropTypes from "prop-types";
import SaleRender from "./saleRender";
import PeriodsServicesList from "./periodsServicesList";
import StartPeriodsServices from "./startPeriodServices";
export default function ServicesCard({ items }) {
    return (
        <>
            {items.map((item) => (
                <div key={item._id}>
                    <div className="col">
                        <div className="card card-margin">
                            <div className="widget-49-title-wrapper-img">
                                <div className="my-flex-box widget-49-title-wrapper">
                                    <div className="card-title">
                                        <SaleRender item={item} />
                                    </div>
                                </div>
                                <div className="my-flex-box">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            `/img/${item.picture}`
                                        }
                                        width="50"
                                        height="50"
                                        alt="picture"
                                    />
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="widget-49">
                                    <div className="widget-49-title-wrapper">
                                        <div className="widget-49-date-primary">
                                            <StartPeriodsServices
                                                periodsServices={item.period}
                                            />
                                        </div>
                                        <div className="widget-49-meeting-info">
                                            <span
                                                style={{
                                                    color: "#000000",
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                {" "}
                                                Место:
                                            </span>
                                            <span className="widget-49-pro-title">
                                                {item.location}
                                            </span>
                                            <span
                                                style={{
                                                    color: "#000000",
                                                    fontWeight: "bold"
                                                }}
                                            >
                                                {" "}
                                                Расписание групп:
                                            </span>
                                            <span className="widget-49-meeting-time">
                                                <PeriodsServicesList
                                                    periodsServices={
                                                        item.period
                                                    }
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <ol className="widget-49-meeting-points">
                                        <li className="widget-49-meeting-item">
                                            <span>
                                                Уточняйте время начала занятия
                                                групп
                                            </span>
                                        </li>
                                        <li className="widget-49-meeting-item">
                                            <span>в ЛК ссылка на пропуск</span>
                                        </li>
                                        <li className="widget-49-meeting-item">
                                            <span>Регистрация за 30 минут</span>
                                        </li>
                                    </ol>
                                    <div className="my-flex-box widget-49-title-wrapper">
                                        <div className="my-flex-box">
                                            <div className="widget-49-meeting-action">
                                                <a
                                                    href="#"
                                                    className="btn btn-sm btn-flash-border-primary"
                                                >
                                                    <span className="badge rounded-pill bg-danger text-dark">
                                                        <i className="bi bi-bookmark-heart"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="my-flex-box">
                                            <div className="widget-49-meeting-action">
                                                <a
                                                    href="#"
                                                    className="btn btn-sm btn-flash-border-primary"
                                                >
                                                    <span className="badge rounded-pill bg-primary text-dark">
                                                        <i className="bi bi-basket"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

ServicesCard.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object])
};
