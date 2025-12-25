import { useState } from "react";

const Home = () => {
  // let name = "mario";
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("ishan");
    setAge(37);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        {name} is {age} old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
<div className="home">
  <h2>Home Page</h2>
</div>;
