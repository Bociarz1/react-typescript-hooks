import ChildrenComp from "./ChildrenComp";
import ThemeContextProvider from "./ThemeContext";

function UseContext() {
  return ( 
    <>
      <ThemeContextProvider>
        <ChildrenComp/>
      </ThemeContextProvider>
    </>
   );
}

export default UseContext;