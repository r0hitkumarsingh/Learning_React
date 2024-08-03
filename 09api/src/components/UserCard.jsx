import React from "react";

const UserCard = (props) => {
  console.log(props.data);

  return (
    <div className="flex justify-center">
        
      <div class="m-4 p-5 border rounded text-center text-gray-500 max-w-sm">
      <h2 className="p-2 text-xl text-slate-950">Random User Profile</h2>
      
        <img
          class="w-32 h-32 rounded-full mx-auto"
          src={props.data.picture.large}
          alt="Random User Image"
        />

        <div class="text-sm mt-5">
          <a
            href="#"
            class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {props.data.name.first} {props.data.name.last}
          </a>
          <p>{props.data.phone}</p>
        </div>

        <p class="mt-2 text-sm text-gray-900">
          {props.data.location.city}, {props.data.location.state}, <br />
          {props.data.location.country}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
