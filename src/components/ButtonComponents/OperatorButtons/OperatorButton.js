import React from "react";
// import { tsPropertySignature } from "@babel/types";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button>{props.operator.value}</button>
      }
    </>
  );
};
export default OperatorButton;