import { useState } from "react";

function useToggle(initalVal = false) {
  const [state, setState] = useState(initalVal);
  const toggle = () => {
    setState(!state);
  };

  //our custom hook needs to return an array 2 values just like useState does
  return [state, toggle];
}

export default useToggle;
