
import './App.css';
import { Route, Switch } from "react-router-dom";


import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/about" exact component={About} />
      </Switch>
    </div>
  );
}

export default App;
