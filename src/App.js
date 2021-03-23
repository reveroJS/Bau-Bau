
import './App.css';
import { Route, Switch } from "react-router-dom";


import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/contact" component={ContactUs} />
        <Route path="/signIn" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
