import React, { useState, useEffect } from "react";
import CategoriesList from "../components/categoriesList";
import ServicesCard from "../components/servicesCard";
import api from "../api";
import SpinnerRender from "../components/spinnerRender";
// import SearchRender from "../components/searchRender";
import SortingRender from "../components/sortingRender";
import HeaderRender from "../components/headerRender";
import _ from "lodash";
const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [services, setServices] = useState();
    useEffect(() => {
        api.services.fetchAll().then((data) => setServices(data));
    }, []);

    const [categorys, setCategorys] = useState();
    useEffect(() => {
        api.categorys.fetchAll().then((data) => setCategorys(data));
    }, []);
    const [sortBy, setSortBy] = useState({ path: "sale", order: "asc" });

    const handleCategorysSelect = (item) => {
        setSelectedCategory(item);
    };
    if (services) {
        const filteredServices = selectedCategory
            ? services.filter(
                  (item) =>
                      JSON.stringify(item.category) ===
                      JSON.stringify(selectedCategory)
              )
            : services;
        const count = filteredServices.length;
        console.log(count);

        const handleSort = (item) => {
            setSortBy(item);
        };

        const sortedServices = _.orderBy(
            filteredServices,
            [sortBy.path],
            [sortBy.order]
        );
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <HeaderRender selectedItem={selectedCategory} />
                                <SortingRender
                                    onSort={handleSort}
                                    selectedSort={sortBy}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {categorys && (
                            <CategoriesList
                                selectedItem={selectedCategory}
                                items={categorys}
                                onItemSelect={handleCategorysSelect}
                            />
                        )}

                        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                                <ServicesCard items={sortedServices} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return <SpinnerRender />;
};
export default Main;
