import React, { useState,useEffect } from "react";
import { BrowserRouter,Routes } from "react-router-dom"

function Home(){
    const[products,setProducts] = useState([]);
    useEffect(()=>{
        const obj = [{
            _id : "01",
            name:"Keyboard",
            image:"url",
            price:2000
        }]
        setProducts(obj)
    },[])
    return(
        <div>
            <ul>
            {products.map((item,index) => (
                <li key={index}>{item.name},{item.price}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Home