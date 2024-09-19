import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const reposPerPage = 5; // Number of repos per page

  // Fetch user data
  const fetchGitHubUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setError('');
        setCurrentPage(1); // Reset to page 1 when a new user is searched
        fetchRepos(1); // Fetch repos for the first page
      } else {
        setUserData(null);
        setRepos([]);
        setError('User not found');
      }
    } catch (error) {
      setError('Error fetching user');
    } finally {
      setLoading(false);
    }
  };

  // Fetch repositories with pagination
  const fetchRepos = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=${reposPerPage}&page=${page}`
      );
      if (response.ok) {
        const data = await response.json();
        setRepos(data);
        setError('');
      } else {
        setRepos([]);
        setError('Failed to fetch repositories');
      }
    } catch (error) {
      setError('Error fetching repositories');
    } finally {
      setLoading(false);
    }
  };

  // Handle pagination
  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchRepos(nextPage);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
      fetchRepos(previousPage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>

      <div className="mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchGitHubUser}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {userData && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={userData.avatar_url} alt="avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="text-2xl font-bold">{userData.name || userData.login}</h2>
          <p className="text-gray-600">{userData.bio}</p>
          <div className="mt-4">
            <p>Followers: {userData.followers}</p>
            <p>Public Repos: {userData.public_repos}</p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        </div>
      )}

      {repos.length > 0 && (
        <div className="mt-6 w-full max-w-2xl">
          <h3 className="text-xl font-bold mb-4">Repositories</h3>
          <ul className="space-y-4">
            {repos.map((repo) => (
              <li key={repo.id} className="p-4 bg-white rounded-lg shadow-md">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold"
                >
                  {repo.name}
                </a>
                <p className="text-gray-600">{repo.description || 'No description available'}</p>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-4 mb-5">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Previous
            </button>
            <span className="text-gray-700">Page {currentPage}</span>
            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
