// Friends.jsx
import React, { useContext } from "react";
import { CookieContext } from "./CookieContext";

function Friends() {
  const { cookie } = useContext(CookieContext);
  return (
    <div>
      <h1>Friends' Favorite Cookies</h1>
      <ul>
        {cookie.map((cookie, index) => (
            <li key={index}> {cookie}  </li>

        ))}
      </ul>
    </div>
  );
}

export default Friends;
