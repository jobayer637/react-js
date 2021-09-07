import React,{useState} from 'react'

function HookCounter () {

    const [count, setCount] = useState(0)

    return (<div className="container">
        <button className="btn btn-outline-warning rounded-0" onClick={()=> setCount(count + 1)}>count {count}</button>
    </div>)
}

export default HookCounter