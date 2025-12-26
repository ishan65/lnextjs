import { useState, useEffect } from "react";
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

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => {
      return blog.id !== id;
    });
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log(blogs);
  }, [name]);

  return (
    <div className="home">
      <h2>Home Page</h2>
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => {
          return blog.author === "Neelam";
        })}
        title="Neelam's blogs"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName("ishan")}>Change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
