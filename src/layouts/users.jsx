import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../componets/page/userPage";
import UsersListPage from "../componets/page/usersListPage";

const Users = () => {
    const { id } = useParams();

    return <>{id ? <UserPage id={id} /> : <UsersListPage />}</>;
};

export default Users;
