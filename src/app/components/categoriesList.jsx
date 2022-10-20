import React from "react";
import PropTypes from "prop-types";
export default function CategoriesList({
    items,
    valueProperty,
    contentProperty,
    selectedItem,
    onItemSelect
}) {
    return (
        <>
            {" "}
            <nav
                id="sidebarMenu"
                className="col-md-3 col-lg-2 d-md-block sidebar collapse"
            >
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        {Object.keys(items).map((item) => (
                            <li
                                key={items[item][valueProperty]}
                                className={
                                    "list-group-item" +
                                    (items[item] === selectedItem
                                        ? " active"
                                        : "")
                                }
                                onClick={() => onItemSelect(items[item])}
                                role="button"
                            >
                                {items[item][contentProperty]}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}

CategoriesList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
CategoriesList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};
