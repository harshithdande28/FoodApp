import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import "./App.css";
import InnerContainer from "./components/InnerContainer";
import FoodData from "./components/FoodData";
function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodData />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
