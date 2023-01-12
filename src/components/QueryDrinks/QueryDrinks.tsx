import {useState} from "react";
import "./QueryDrinks.css"

interface Props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function QueryDrinks(props:Props){
    
    return(
        <label>
            <span> Find Your Next Drink! </span>
            <input onChange={props.handleChange}/>
        </label>
    )
}