import "./App.css";
import Card from "./components/Card";

let myObj = {
  username : "Rohit",
 age : 22
}

let newArr = [1, 2, 3];

 
function App() {
  return (
    <>
      <Card username= "Rohit kumar" btntext= "Click Me"/>
      <Card username= "Kajol" btntext= "Visit Me"/>
 
    </>
  );
}

export default App;
