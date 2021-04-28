
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

import * as firebase from "./services/firebase";

import Header from "./components/Header";
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Meals from './components/Meals';
import Detail from './components/Detail';
import Checkout from "./components/Checkout";
import MyProfile from './components/MyProfile';
import PageNotFound from "./components/404";
import Box from "./components/Box";
import AuthContext from "./contexts/AuthContext";
import isAuth from "./hoc/isAuth";


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(setUser)
  }, [])

  const authInfo = {
    isAuthenticated: Boolean(user),
    email: user?.email,
  }


  return (
    <div className="App">
      <AuthContext.Provider value={authInfo}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/meals" exact component={Meals} />
          <Route path="/meals/detail/:productId" exact component={Detail} />
          <Route path="/meals/detail/:productId/:productName/checkout" component={Checkout} />
          <Route path="/contact" component={ContactUs} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <Route path="/profile" component={isAuth(MyProfile)} />
          <Route path="/employee/box" component={isAuth(Box)} />
          <Route path="/logout" render={props => {
            firebase.auth.signOut();
            return <Redirect to="/" />
          }} />

          <Route path="/404" component={PageNotFound} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}
export default App;
