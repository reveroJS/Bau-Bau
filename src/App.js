
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";


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
// import Inbox from "./components/Inbox";
import * as firebase from "./services/firebase";


function App() {

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {

    firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
    });
  }, [setIsLogged])


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/meals" exact component={Meals} />
        <Route path="/meals/detail/:productId" exact component={Detail} />
        <Route path="/meals/detail/:productId/:productName/checkout" component={Checkout} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route paht="/inbox" exact component={Inbox} /> */}
        {isLogged ? (
          <>
            <Route path="/profile" component={MyProfile} />
            <Route path="/logout" render={props => {
              firebase.auth.signOut();
              let keyName = localStorage.key(0);
              localStorage.removeItem(keyName);
              return <Redirect to="/" />
            }} />
          </>
        ) : (
          <PageNotFound />
        )}
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
