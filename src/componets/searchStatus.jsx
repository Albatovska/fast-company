import React from "react";

const SearchStatus = ({length}) => {
    const restNumber = [2, 3, 4];
            let humans = 'человек'; 
            if (restNumber.includes(length % 10)) {
                humans = 'человека'
            }
            if (length > 10 && length < 20) humans = "человек";
           // console.log(number)
            return length !== 0 ? (
          <h1 className="badge fs-4 bg-primary m-2 mx-3">
             C тобой хотят познакомится {length} {humans}. </h1>
        ) : (
          <h1 className="badge fs-4 bg-danger m-2 mx-3">
            Нет подходящих людей для знакомства.
          </h1>
        );
}


export default SearchStatus;