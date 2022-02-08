import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "../componets/page/userPage";
import UserEditPage from "../componets/page/userEditPage/userEditPage";
import UsersListPage from "../componets/page/usersListPage";

// const Users = () => {
//     const { id } = useParams();

//     return <>{id ? <UserPage id={id} /> : <UsersListPage />}</>;
// };

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    return (
        <>
            {userId ? (
                edit ? (
                    <UserEditPage />
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <UsersListPage />
            )}
        </>
    );
};
export default Users;
