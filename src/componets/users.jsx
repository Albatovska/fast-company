import React, { useState} from "react";
import api from "../api";

const Users=()=>{
    const [users, setUsers] = useState(api.users.fetchAll());
    console.log(users);


    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(user => user._id !== userId))
        console.log(userId)
    };
    const renderPhrase = (number) => {
        
        const restNumber = [2, 3, 4];
        let humans = 'человек'; 
        if (restNumber.includes(number % 10)) {
            humans = 'человека'
        }
        if (number > 10 && number < 20) humans = "человек";
       // console.log(number)
        return number !== 0 ? (
      <h1 className="badge fs-4 bg-primary m-2 mx-3">
         C тобой хотят познакомится {number} {humans}. </h1>
    ) : (
      <h1 className="badge fs-4 bg-danger m-2 mx-3">
        Нет подходящих людей для знакомства.
      </h1>
    );
    };
    
    return ( 
        <>
            {renderPhrase(users.length)}
            <table className={!users.length ? "invisible" : "visible" && "mx-3 table"} >
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                    </tr>
                </thead>
                <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((quality) => (
                    <span
                      className={`badge bg-${quality.color} m-1`}
                      key={quality._id}
                    >
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{`${user.rate}/5`}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
            </table>
        </>
    );
};

export default Users;