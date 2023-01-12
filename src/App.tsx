import {useState, useEffect} from "react";
import QueryDrinks from "./components/QueryDrinks/QueryDrinks";
import DrinkResults from "./components/DrinkResults/DrinkResults"
import './App.css';


function App() {
  const [inputQuery, setInputQuery] = useState<string>("")
  const [apiResponse, setApiResponse] = useState([]);

  function handleChange (event: React.ChangeEvent<HTMLInputElement>){
    const inputValue = event.currentTarget.value
    setInputQuery(inputValue)
}

  const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputQuery}`;
    useEffect(() => {
      console.log(API_URL)
      fetch(API_URL)
      .then(response => response.json())
      .then( data =>
        setApiResponse(data.drinks)
      )
      .catch(error => console.log("this is an error", error))
    }, [inputQuery])


  
  
  return (
    <div className="App">
      <QueryDrinks handleChange = {handleChange}/>
      <DrinkResults apiResponse = {apiResponse}/>
    </div>
  );
}

export default App;
