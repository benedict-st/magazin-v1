import React from "react";
import PropTypes from "prop-types";
export default function HeaderRender({ selectedItem }) {
    console.log(selectedItem);
    return (
        <>
            <h4>Каталог услуг</h4>
        </>
    );
}
HeaderRender.propTypes = {
    selectedItem: PropTypes.object
};
