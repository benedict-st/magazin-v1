import { categorysObject as categorys } from "./categorys.api";
import { periodsServicesObject as periodsServices } from "./periodsServices.api";

const services = [
    {
        _id: "67rdca3eeb7f6fgeed471813",
        name: "categoryA",
        service: "Обучение водителей Категория A",
        category: categorys.autoSchool,
        totalHours: { title: "Всего часов", value: 230 },
        theoryHours: { title: "Теория часы", value: 110 },
        drivingHours: { title: "Вождение часы", value: 20 },
        resourceHours: { title: "Моторесурс часы", value: 100 },
        location: "Москва ул.Садовая д.132 к.2",
        period: [
            periodsServices.period_2,
            periodsServices.period_4,
            periodsServices.period_3
        ],
        price: 12000,
        sale: "да",
        picture: "001.png"
    },
    {
        _id: "67rdca3eeb7f6fgeed471814",
        name: "categoryB",
        service: "Обучение водителей Категория В",
        category: categorys.autoSchool,
        totalHours: { title: "Всего часов", value: 730 },
        theoryHours: { title: "Теория часы", value: 134 },
        drivingHours: { title: "Вождение часы", value: 56 },
        resourceHours: { title: "Моторесурс часы", value: 540 },
        location: "г.Москва ул.Садовая д.132 к.2",
        period: [periodsServices.period_1, periodsServices.period_2],
        price: 23000,
        sale: "нет",
        picture: "002.png"
    },
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "categoryC",
        service: "Обучение водителей Категория С",
        category: categorys.autoSchool,
        totalHours: { title: "Всего часов", value: 944 },
        theoryHours: { title: "Теория часы", value: 170 },
        drivingHours: { title: "Вождение часы", value: 74 },
        resourceHours: { title: "Моторесурс часы", value: 700 },
        location: "г.Москва ул.Молодежная д.32 Полигон № 1",
        period: [periodsServices.period_1, periodsServices.period_2],
        price: 30800,
        sale: "да",
        picture: "003.png"
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "categoryBC",
        service: "Обучение водителей Категория с B на C",
        category: categorys.autoSchool,
        totalHours: { title: "Всего часов", value: 434 },
        theoryHours: { title: "Теория часы", value: 44 },
        drivingHours: { title: "Вождение часы", value: 40 },
        resourceHours: { title: "Моторесурс часы", value: 350 },
        location: "г.Москва ул.Молодежная д.32 Полигон № 1",
        period: [periodsServices.period_1],
        price: 30800,
        sale: "нет",
        picture: "004.jpg"
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "categoryCD",
        service: "Обучение водителей Категория с С на D",
        category: categorys.autoSchool,
        totalHours: { title: "Всего часов", value: 434 },
        theoryHours: { title: "Теория часы", value: 72 },
        drivingHours: { title: "Вождение часы", value: 42 },
        resourceHours: { title: "Моторесурс часы", value: 400 },
        location: "г.Москва ул.Космонавтов д.32 Полигон № 2",
        period: [
            periodsServices.period_1,
            periodsServices.period_2,
            periodsServices.period_3
        ],
        price: 21000,
        sale: "нет",
        picture: "005.jpg"
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        name: "categoryCB",
        service: "Обучение водителей Категория с С на B",
        category: categorys.autoSchool,
        totalHours: { title: "Всего часов", value: 260 },
        theoryHours: { title: "Теория часы", value: 32 },
        drivingHours: { title: "Вождение часы", value: 28 },
        resourceHours: { title: "Моторесурс часы", value: 200 },
        location: "г.Москва ул.Космонавтов д.32 Полигон № 2",
        period: [periodsServices.period_1],
        price: 21000,
        sale: "нет",
        picture: "006.jpg"
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        name: "categoryCE",
        service: "Обучение водителей Категория с С на E",
        category: categorys.autoSchool,
        totalHours: { title: "Всего часов", value: 260 },
        theoryHours: { title: "Теория часы", value: 32 },
        drivingHours: { title: "Вождение часы", value: 28 },
        resourceHours: { title: "Моторесурс часы", value: 200 },
        location: "г.Москва ул.Космонавтов д.32 Полигон № 2",
        period: [
            periodsServices.period_1,
            periodsServices.period_2,
            periodsServices.period_3
        ],
        price: 14000,
        sale: "нет",
        picture: "003.png"
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        name: "group_1",
        service: "Бизнес Академия Группа возраст с 14 лет до 17 лет",
        category: categorys.businessSchool,
        totalHours: { title: "Всего часов", value: 750 },
        theoryHours: { title: "", value: "" },
        drivingHours: { title: "", value: "" },
        resourceHours: { title: "", value: "" },
        location: "г.Москва ул. Никольская д.3 Корпус 2",
        period: [periodsServices.period_2],
        price: 14000,
        sale: "да",
        picture: "b01.jpg"
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        name: "group_2",
        service: "Бизнес Академия Группа возраст с 17 лет до 18 лет",
        category: categorys.businessSchool,
        totalHours: { title: "Всего часов", value: 750 },
        theoryHours: { title: "", value: "" },
        drivingHours: { title: "", value: "" },
        resourceHours: { title: "", value: "" },
        location: "г.Москва ул. Никольская д.3 Корпус 2",
        period: [
            periodsServices.period_1,
            periodsServices.period_2,
            periodsServices.period_3
        ],
        price: 15000,
        sale: "нет",
        picture: "b02.jpg"
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        name: "group_3",
        service: "Бизнес Академия Группа возраст с 18 лет до 19 лет",
        category: categorys.businessSchool,
        totalHours: { title: "Всего часов", value: 750 },
        theoryHours: { title: "", value: "" },
        drivingHours: { title: "", value: "" },
        resourceHours: { title: "", value: "" },
        location: "г.Москва ул. Никольская д.3 Корпус 2",
        price: 24000,
        period: [
            periodsServices.period_1,
            periodsServices.period_2,
            periodsServices.period_3
        ],
        sale: "нет",
        picture: "b03.jpg"
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        name: "languageGroup_1",
        service: "Английский язык Step 1 от 3 до 8 лет",
        category: categorys.languageService,
        totalHours: { title: "Всего часов", value: 750 },
        theoryHours: { title: "", value: "" },
        drivingHours: { title: "", value: "" },
        resourceHours: { title: "", value: "" },
        location: "г.Москва пер. Камергерский д.33 здание 2",
        period: [periodsServices.period_1],
        price: 14000,
        sale: "нет",
        picture: "l01.jpg"
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        name: "languageGroup_2",
        service: "Английский язык Step 2 от 6 до 9 лет",
        category: categorys.languageService,
        totalHours: { title: "Всего часов", value: 750 },
        theoryHours: { title: "", value: "" },
        drivingHours: { title: "", value: "" },
        resourceHours: { title: "", value: "" },
        location: "г.Москва пер. Камергерский д.33 здание 2",
        period: [periodsServices.period_2, periodsServices.period_3],
        price: 11000,
        sale: "да",
        picture: "l02.png"
    },
    {
        _id: "67rdca3eeb7f6fgeed471825",
        name: "languageGroup_3",
        service: "Английский язык Step 2 от 6 до 9 лет",
        category: categorys.languageService,
        totalHours: { title: "Всего часов", value: 750 },
        theoryHours: { title: "", value: "" },
        drivingHours: { title: "", value: "" },
        resourceHours: { title: "", value: "" },
        location: "г.Москва пер. Камергерский д.33 здание 2",
        period: [
            periodsServices.period_1,
            periodsServices.period_2,
            periodsServices.period_3
        ],
        price: 12000,
        sale: "нет",
        picture: "l03.jpg"
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(services);
        }, 2000);
    });
const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(services.find((service) => service._id === id));
        }, 1000);
    });
export default {
    fetchAll,
    getById
};
