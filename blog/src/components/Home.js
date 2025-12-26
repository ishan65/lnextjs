import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:5789/blogs");

  return (
    <div className="home">
      <h2>Home Page</h2>
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Home;
