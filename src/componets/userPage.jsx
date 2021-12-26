import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import api from "../api";
import QualitiesList from "./qulitiesList";

const UserPage = ({ id }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.default.getById(id).then((data) => setUser(data));
        return () => setUser(null);
    }, []);

    const history = useHistory();

    const handleBackToAllUsers = () => {
        history.push("/users");
    };

    return (
        <>
            {user
                ? (
                    <>
                        <h1>{user.name}</h1>
                        <h2>Профессия: {user.profession.name}</h2>
                        <QualitiesList qualities={user.qualities} />
                        <p>completedMeetings: {user.completedMeetings}</p>
                        <h3>Rate: {user.rate}</h3>
                        <button
                            className="btn btn-primary ms-1"
                            onClick={handleBackToAllUsers}
                        >
                        Все пользователи
                        </button>
                    </>
                )
                : (
                    <h3>loading...</h3>
                )}
        </>
    );
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
