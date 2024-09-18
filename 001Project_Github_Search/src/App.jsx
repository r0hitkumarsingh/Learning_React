import React, { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const fetchGithubUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setError("");
      } else {
        setUserData(null);
        setError("User Not Found!!!");
      }
    } catch (error) {
      setError("Error fetching User!!!");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">

        <h1 className="text-3xl font-bold mb-6 text-center">GitHub User Search</h1>


        <div className="mb-6">

          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter GitHub username"
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={fetchGithubUser}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        
        {error && <p className="text-red-500">{error}</p>}

        {userData && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={userData.avatar_url}
              alt="avatar"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold">
              {userData.name || userData.login}
            </h2>
            <p className="text-gray-600">{userData.bio}</p>
            <div className="mt-4">
              <p>Followers: {userData.followers}</p>
              <p>Public Repos: {userData.public_repos}</p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </>

    
  );
}

export default App;
