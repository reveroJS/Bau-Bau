
import './App.css';
import { Route, Switch } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Meals from './components/Meals';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/meals" component={Meals} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    <Footer />

    </div>
  );
}

export default App;
