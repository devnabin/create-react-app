import React from "react";

//class component
const person = (props) => {
  return (
    <div>
      <p>
        Hello my name is {props.name} and i am {props.age} years old
      </p>
      <p> {props.children}</p>
    </div>
  );
};

export default person;


//we learn
//props.name or any props.any property
//props.children for componet naming