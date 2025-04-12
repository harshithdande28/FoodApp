import { useEffect, useState } from "react";
import Styles from "./search.module.css";
const url = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_API_KEY;
export default function Search({setFoodData}) {
    const[query,setQuery] = useState("pizza");
    useEffect(()=>{
      async function fetchFood(){
        const res = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`)
        const data = await res.json()
        console.log(data.results)
        setFoodData(data.results)
      }
      fetchFood()
    },[query])
  function handleChange(e) {
    e.preventDefault();
    setQuery(e.target.value)
  }
  return (
    <div className={Styles.searchContainer}>
      <input className={Styles.input}
        onChange={(e) => handleChange(e)}
        type="text"
        value={query}
      />
      <button>Search</button>
    </div>
  );
}
