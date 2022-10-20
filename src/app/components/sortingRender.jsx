import React from "react";
import PropTypes from "prop-types";
export default function SortingRender({ onSort, selectedSort }) {
    const handleSort = (name) => {
        onSort({
            path: name,
            order: selectedSort.order === "asc" ? "desc" : "asc"
        });
    };
    const renderSortArrow = (selectedSort, currentPath) => {
        if (selectedSort.path === currentPath) {
            if (selectedSort.order === "asc") {
                return <i className="bi bi-caret-down-fill"></i>;
            } else {
                return <i className="bi bi-caret-up-fill"></i>;
            }
        }
        return null;
    };
    return (
        <div>
            <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                    <button
                        onClick={() => handleSort("price")}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                    >
                        {renderSortArrow(selectedSort, "price")}
                        по цене
                    </button>
                    <button
                        onClick={() => handleSort("sale")}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                    >
                        {renderSortArrow(selectedSort, "sale")}
                        по популярности
                    </button>
                </div>
            </div>
        </div>
    );
}
SortingRender.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};
