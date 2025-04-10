import {useState} from 'react'
export default function App2(){
    const [count,setCount]=useState(0)
    const increment=() => {
        setCount(count+1)
    }
    const decremnet =()=> {
        setCount(count-1)
    }
      return(
    <div>
        <button onClick={decremnet}>-</button>
        {count}
        <button onClick={increment}>+</button>
    </div>
    )
}
