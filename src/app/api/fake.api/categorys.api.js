export const categorysObject = {
    autoSchool: {
        _id: "67rdca3eeb7f6fgeed471826",
        name: "Автошкола"
    },
    businessSchool: {
        _id: "67rdca3eeb7f6fgeed471827",
        name: "Бизнес школа"
    },
    languageService: {
        _id: "67rdca3eeb7f6fgeed471828",
        name: "Языковой центр"
    },
    additionalService: {
        _id: "67rdca3eeb7f6fgeed471829",
        name: "Дополнительные услуги"
    }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categorysObject);
        }, 2000);
    });

export default {
    fetchAll
};
