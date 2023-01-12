import {useState} from "react";
import "./DrinkResults.css"

interface Props {
   apiResponse: any
}

export default function DrinkResults (props:Props){
   console.log(props.apiResponse)
   return (
    <div id="DrinkResults">
               {
                  props.apiResponse.map((object:any, idx: number) => {
                     return (
                        <div className="DrinkResults_card" key={idx}>
                           <img className="DrinkResults_img" src={object.strDrinkThumb} alt="drink thumbnail"/>
                           <h3> {object.strDrink}</h3>
                        </div>
                     )
                  })
               }
    </div>
   )
}