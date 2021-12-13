import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, id, onToggleBookMark }) => {
    return (
        <i
            className={`bi bi-bookmark-heart${
                status ? "-fill" : ""
            } fs-2 text-secondary `}
            onClick={() => onToggleBookMark(id)}
        ></i>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default BookMark;
