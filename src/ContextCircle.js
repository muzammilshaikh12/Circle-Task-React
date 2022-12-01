import React,{useReducer }from 'react'

import reducer from './CircleReducer'
let initialState = {
    items:[]
    
}
const ContextCircle = React.createContext()

export const ContextProvider = (props) => {
   
   const [state, dispatch] = useReducer(reducer, initialState);
    const addCircle = () => {
        dispatch({ type: "ADD_TO_CIRCLE", payload: [1,'white']})
      
      }
    
   
    return <ContextCircle.Provider value={{initialState,addCircle}}>
       {props.children}
    </ContextCircle.Provider>
}

export default ContextCircle