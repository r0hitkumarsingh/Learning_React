import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  NavLink,
} from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <div className="post-container">
        {posts.map((post) => (
          <NavLink className="nav-container" to={`/post/${post.id}`}>
            {post.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const PostPage = () => {
  const params = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  console.log("Data", data);
  if (data === null) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data}</h1>
      <p>{data.body}</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

const Setting = () => {
  return (
    <div>
      <h1>Setting Page</h1>
    </div>
  );
};

const NewUser = () => {
  const params = useParams();
  console.log("params", params);

  return (
    <div>
      <h1>Your Name is {params.userId}</h1>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:postId" element={<PostPage />} />

        <Route path="/user/:userId" element={<NewUser />} />

        <Route path="account">
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
