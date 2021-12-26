import React from "react";
import { useParams } from "react-router-dom";
import UsersList from "../componets/usersList";
import UserPage from "../componets/userPage";

const Users = () => {
    const { id } = useParams();

    return <>{id ? <UserPage id={id} /> : <UsersList />}</>;
};

export default Users;
