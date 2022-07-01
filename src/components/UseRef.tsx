import { useEffect, useRef } from "react";

function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(()=>{
    inputRef.current?.focus()
  }, [])
  return ( 
    <>
      <input type='text'ref={inputRef}/>
    </>
   );
}

export default UseRef;