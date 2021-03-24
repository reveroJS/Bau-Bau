
import './App.css';
import { Route, Switch } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/contact" component={ContactUs} />
        <Route path="/Login" component={Login} />
      </Switch>
    <Footer />

    </div>
  );
}

export default App;
