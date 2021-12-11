import React from "react";
import Quality from "./quality";
import BookMark from "./bookmark";

const User = ({user, onDelete, onToggleBookMark}) => {
  
        return (
       <tr key={user._id}>
        <td>{user.name}</td>
        <td>
         {user.qualities.map((quality) => (
            <Quality
             key={quality._id}
              quality={quality} />
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{`${user.rate}/5`}</td>
        <td>
            <BookMark 
            id = {user._id}
            onToggleBookMark = {onToggleBookMark}
            status ={user.bookmark}
            />
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(user._id)}
          >
            Delete
          </button>
        </td>
      </tr>
        )

}

export default User;