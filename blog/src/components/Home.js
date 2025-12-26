import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // let name = "mario";
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "My website",
      body: "It is a good website.",
      author: "Ishan",
    },
    {
      id: 2,
      title: "your website",
      body: "It is a better website.",
      author: "Nidhi",
    },
    {
      id: 3,
      title: "Our website",
      body: "It is a best website.",
      author: "Neelam",
    },
  ]);

  return (
    <div className="home">
      <h2>Home Page</h2>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
