import React, { useState, useEffect } from "react";
import Users from "./componets/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((user) => user._id !== userId)
        );
    };
    const handleToggleBookMark = (id) => {
        setUsers((prevUsers) => {
            const indexEl = prevUsers.findIndex((user) => user._id === id);
            prevUsers[indexEl].bookmark = !prevUsers[indexEl].bookmark;
            return [...prevUsers];
        });
    };
    return (
        <>
            <Users
                users={users}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
            />
        </>
    );
}

export default App;
