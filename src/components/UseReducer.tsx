import { useReducer } from "react"

// initial state
type StateType ={
  value: number
}
const initialState = {
  value: 0
}

// actions
type ActionType = {
  payload: number
  type: string
}

// reducer
const reducer = (state:StateType, action:ActionType) => {
  switch(action.type) {
    case 'INCREMENT':
      return {value: state.value + action.payload}
    case 'DECREMENT':
      return {value: state.value - action.payload}
    case 'RESET':
      return initialState
      // default value is neccesary
    default:
      return state
  }
}

const [value, dispatch] = useReducer(reducer, initialState)

function UseReducer() {
  return ( 
    <>
      <button onClick={()=>dispatch({type: 'INCREMENT', payload: 1})}>INCREMENT</button>
      Value: {value}
    </>
   );
}

export default UseReducer;