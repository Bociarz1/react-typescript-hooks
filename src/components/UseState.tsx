import { useState } from "react";

function UseState() {
  // useState ts declaration
  const [value, setValue] = useState<number | null>(null);

  // type assertion - using when you know better than typescript that this value2 will bbe soon a number type
  const [value2, setValue2] = useState<number>({} as number);
  return ( 
    <>
    </>
   );
}

export default UseState;