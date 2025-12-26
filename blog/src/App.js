import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Create from "./components/Create";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
