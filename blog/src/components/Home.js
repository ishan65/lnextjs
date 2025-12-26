import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // let name = "mario";
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => {
      return blog.id !== id;
    });
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:5789/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      <h2>Home Page</h2>
      {blogs && (
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
