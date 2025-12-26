import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // let name = "mario";
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => {
      return blog.id !== id;
    });
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:5789/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        setError(e.messaga);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      <h2>Home Page</h2>
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
