import "./App.css";

function App() {
  const title = "Welcome to new blog";
  const likes = 50;
  // const person = { name: "yoshi", age: 30 };   // bool and object in component will give error
  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>liked {likes} times</p>
        {/* <p>{person}</p> */}
        <p>{10}</p>
        <p>{"Hello Ishan"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
