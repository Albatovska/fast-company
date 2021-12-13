import React from "react";
import Quality from "./quality";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
    const {
        name,
        _id,
        qualities,
        profession,
        completedMeetings,
        rate,
        onToggleBookMark,
        bookmark,
        onDelete
    } = props;

    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>
                {qualities.map((quality) => (
                    <Quality key={quality._id} {...quality} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{`${rate}/5`}</td>
            <td>
                <BookMark
                    id={_id}
                    onToggleBookMark={onToggleBookMark}
                    status={bookmark}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(_id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    name: PropTypes.string.isRequired,
    qualities: PropTypes.arrayOf(PropTypes.object).isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};
export default User;
