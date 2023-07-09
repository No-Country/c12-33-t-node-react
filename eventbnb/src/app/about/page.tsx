"use client"
import {useState} from "react";

export default function pageAbout (){

    let [count, setCount] = useState(0);

        const handleCount = () => {
            setCount(count += 1)
        }
    return(
        <div>
            <h1>Proyecto terminado</h1>
            <button onClick={handleCount}>Hola</button>
            <h3>{count}</h3>
        </div>
    )
}