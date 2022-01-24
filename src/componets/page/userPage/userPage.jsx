import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import api from "../../../api";
import QualitiesList from "../../ui/qulities";

const UserPage = ({ id }) => {
    const history = useHistory();
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    const handleGetToUserEdit = () => {
        history.push("/users/" + id + "/edit");
    };

    return (
        <>
            {user ? (
                <>
                    <h1>{user.name}</h1>
                    <h2>Профессия: {user.profession.name}</h2>
                    <QualitiesList qualities={user.qualities} />
                    <p>completedMeetings: {user.completedMeetings}</p>
                    <h3>Rate: {user.rate}</h3>
                    <button
                        className="btn btn-primary ms-1"
                        onClick={handleGetToUserEdit}
                    >
                        Редактировать
                    </button>
                </>
            ) : (
                <h3>loading...</h3>
            )}
        </>
    );
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
