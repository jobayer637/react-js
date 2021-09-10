import React, {useState, useReducer} from 'react'
import Switch from "react-switch";

const initialState = {
    iniCount: 0

}
const reduce = (state, action) => {
    console.log(action)
    switch(action.type) {
        case '+' :
            return  {iniCount: state.iniCount + action.value}
        case '-' :
            return {iniCount: state.iniCount <= 0 ?  initialState.iniCount :  state.iniCount - action.value}
        case '+-' :
            return {iniCount: initialState.iniCount}
        default: 
            return state
    }
}


function Reducer() {
    const [count, dispatch] = useReducer(reduce, initialState)
  
    return (
        <div className="container my-3">
            <div className="card text-center">
                <div className="card-header">

                    <button className="btn btn-outline-dark mx-2 my-2">count = {count.iniCount}</button> {count.iniCount % 2 == 0? 'even':'odd'}
                    <br/>
                    <button onClick={() => {dispatch({type: '+', value: 1})}} className="btn btn-outline-dark mx-2 my-2">Increment +1</button>
                    <button onClick={() => {dispatch({type: '+', value: 5})}} className="btn btn-outline-dark mx-2 my-2">Increment +5</button>
                    <button onClick={() => {dispatch({type: '-', value: 1})}} className="btn btn-outline-dark mx-2 my-2">Decrement -1</button>
                    <button onClick={() => {dispatch({type: '-', value: 5})}} className="btn btn-outline-dark mx-2 my-2">Decrement -5</button>
                    <button onClick={() => {dispatch({type: '+-'})}} className="btn btn-outline-dark mx-2 my-2">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Reducer
