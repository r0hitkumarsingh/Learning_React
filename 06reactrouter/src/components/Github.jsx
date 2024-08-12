import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

  const data = useLoaderData()

  // const [data, seData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/r0hitkumarsingh")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       seData(data);
  //     });
  // }, []);

  return (
    <>
      <div className="text-center text-white  m-4 bg-gray-600">
        <div className="text-3xl">Github Info</div>
        <h2>Username:  {data.name} </h2>
        <p>Followers: {data.followers}</p>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/r0hitkumarsingh')

  return response.json()
}
