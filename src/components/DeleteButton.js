import React from "react";

const DeleteButton = (props) => {

  return (

    <button className="button places__delete-button" type="button" onClick={props.onClick}></button>
  );
};

export default DeleteButton;
