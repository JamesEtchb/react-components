import React from "react";
import './main.css'
import { useState } from 'react'

function Main() {
    const [count, setCount] = useState(0)
    const handleClick = () => setCount(count + 1)
    return (
        <main id="main">
            <h2>Main section here...</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius quasi perspiciatis repudiandae sint eum maiores sapiente distinctio, aliquid optio dolore nihil voluptatem possimus ullam quos, ipsum at provident repellat?</p>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>Click Me!</button>
        </main>
    )
}


export default Main