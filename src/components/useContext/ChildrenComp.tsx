import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ChildrenComp() {
  const theme = useContext(ThemeContext)
  return ( 
    <>
      <div style={{backgroundColor: theme.white}}></div>
    </>
   );
}

export default ChildrenComp;