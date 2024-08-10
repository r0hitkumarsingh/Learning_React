import React from "react";
import Card from "./components/Card.jsx";

function App() {
  const image = (
    <img
      className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
      src="https://images.unsplash.com/photo-1654944990404-7cc4ff0fb2d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Rachel Picture"
    />
  );

  const image2 = (
    <img
      className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
      src="https://images.unsplash.com/photo-1664924805275-71ea8a45b94f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Rachel Picture"
    />
  );

  const image3 = (
    <img
      className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
      src="https://images.unsplash.com/photo-1655553144218-a12debf65d08?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Rachel Picture"
    />
  );

  return (
    <>
      <div>
        <h1 className="bg-gray-500 text-red-800 text-center font-mono font-extrabold p-4">
          {" "}
          Hello{" "}
        </h1>

        <Card value="Samantha" position="SDE-III" proPic={image} />
        <Card value="Rachel" position="System Designer" proPic={image2} />
      </div>
    </>
  );
}

export default App;
