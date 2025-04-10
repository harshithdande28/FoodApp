import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css"
function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Nav />
      <Search setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </>
  );
}

export default App;
