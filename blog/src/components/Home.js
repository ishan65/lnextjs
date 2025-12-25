const Home = () => {
  const handleClick = (e) => {
    console.log("Hello World", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("Hello " + name, e);
  };
  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={(e) => {
          handleClickAgain("Ishan", e);
        }}
      >
        Click me again
      </button>
    </div>
  );
};

export default Home;
<div className="home">
  <h2>Home Page</h2>
</div>;
