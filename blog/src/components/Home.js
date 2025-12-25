import { useState } from "react";

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
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>blog.title</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
<div className="home">
  <h2>Home Page</h2>
</div>;
