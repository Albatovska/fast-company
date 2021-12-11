import React, {useState} from "react";
import Users  from "./componets/users";
import SearchStatus from "./componets/searchStatus";
import api from "./api";


const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(user => user._id !== userId))

    }
    const handleToggleBookMark = (id) => {
        setUsers((prevUsers) => {
            const indexEl = prevUsers.findIndex(user => user._id === id)
            prevUsers[indexEl].bookmark = !prevUsers[indexEl].bookmark;
            return [...prevUsers]
        })
    }
    return (
       <>
        <SearchStatus length = {users.length}/>
        <Users 
        users = {users}
        onDelete={handleDelete}
        onToggleBookMark = {handleToggleBookMark}
        />
       </>
      
        );
};

export default App;