import { useEffect, useState } from "react";

const url = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "41d76fe281b647d1a163a9ee77ed6f1f";
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
    <div>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        value={query}
      />
      <button>Search</button>
    </div>
  );
}
