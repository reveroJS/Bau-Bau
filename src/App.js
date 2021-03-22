
import './App.css';
import { Route, Switch } from "react-router-dom";


import Header from "./components/Header";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/contact" exact component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
