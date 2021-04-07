
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Meals from './components/Meals';
import Detail from './components/Detail';
import Checkout from "./components/Checkout";
import * as firebase from "./services/firebase";


function App() {

  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/meals" exact component={Meals} />
          <Route path="/meals/detail/:productId" exact component={Detail} />
          <Route path="/meals/detail/:productId/checkout" component={Checkout} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" render={props => {
            firebase.auth.signOut();
            return <Redirect to="/" />
          }} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
