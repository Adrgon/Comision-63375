import { useContext } from "react";
import NumberContext from "../context/NumberContext";
function useNumber() {
  return useContext(NumberContext);
}

export default useNumber;
