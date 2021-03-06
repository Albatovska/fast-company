import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const restNumber = [2, 3, 4];
    let humans = "человек";
    let wants = "хотят";
    if (restNumber.includes(length % 10)) {
        humans = "человека";
    }
    if (length > 10 && length < 20) humans = "человек";
    if (length === 1) wants = "хочет";
    return length !== 0
        ? (
            <h1 className="badge fs-4 bg-primary m-2 mx-3">
            C тобой {wants} познакомится {length} {humans}.
            </h1>
        )
        : (
            <h1 className="badge fs-4 bg-danger m-2 mx-3">
            Нет подходящих людей для знакомства.
            </h1>
        );
};
SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
