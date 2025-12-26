import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>The Blog</h1>
      <div className="links">
        {/* <a href="/">Home</a> */}
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
