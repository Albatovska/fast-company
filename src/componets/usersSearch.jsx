import React from "react";
import PropTypes from "prop-types";

const UsersSearch = ({ onChange, searchValue }) => {
    return (
        <div className="badge fs-4 w-100">
            <div className="w-100%">
                <div className="form">
                    <input
                        type="text"
                        className="form-control form-input"
                        placeholder="Search name..."
                        value={searchValue}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    );
};
UsersSearch.propTypes = {
    onChange: PropTypes.func,
    searchValue: PropTypes.string
};
export default UsersSearch;
