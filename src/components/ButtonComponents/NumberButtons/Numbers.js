import React, {useState} from "react";
import NumberButton from "../NumberButtons";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

import { numbers } from '../../../data'; 

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [num] = useState(numbers)
    console.log(num)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
        num.map((number, index) => {
        console.log(number)
        return (<NumberButton key = {index} number = {number} setValue={props.setValue}/>)
       })
       }
    </div>
  );
};
export default Numbers;