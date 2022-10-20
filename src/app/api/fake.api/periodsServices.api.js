export const periodsServicesObject = {
    period_1: {
        _id: "17rdca3eeb7f6fgeed471826",
        name: "Дневная группа",
        period: { start: "17.05.2022", end: "20.05.2022" }
    },
    period_2: {
        _id: "17rdca3eeb7f6fgeed471827",
        name: "Вечерняя группа",
        period: { start: "22.05.2022", end: "23.05.2022" }
    },
    period_3: {
        _id: "17rdca3eeb7f6fgeed471828",
        name: "Дневная группа",
        period: { start: "30.05.2022", end: "20.05.2022" }
    },
    period_4: {
        _id: "17rdca3eeb7f6fgeed471829",
        name: "Вечерняя группа",
        period: { start: "15.05.2022", end: "20.05.2022" }
    }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(periodsServicesObject);
        }, 2000);
    });

export default {
    fetchAll
};
