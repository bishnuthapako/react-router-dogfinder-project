import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';

import './App.css';
import DogList from "./page/DogList"
import DogDetails from "./page/DogDetails"
import Nav from "./page/Nav"

function App(props) {

  const navigate = useNavigate()

  return (
    <div className="container text-center">
      <h1 onClick={()=>navigate("/")} style={{cursor: "pointer"}}>Good luck!</h1>
      <Nav  dogs={props.dogs}/>
      <hr className="mt-1 mb-1"/>
      <Routes>
        <Route exact path="/" element={<Navigate to="/dogs" />}/>
        <Route path="/dogs" element={<DogList dogs={props.dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={props.dogs} />} />
      </Routes>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "https://images.dog.ceo/breeds/husky/n02110185_5143.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "https://images.dog.ceo/breeds/germanshepherd/n02106662_18922.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "https://images.dog.ceo/breeds/schipperke/n02104365_3950.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "https://images.dog.ceo/breeds/shiba/shiba-13.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
