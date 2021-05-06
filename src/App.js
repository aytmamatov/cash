import { useEffect, useState } from "react";
import firebase from "./config/fbConfig";
import { Route, Switch } from "react-router-dom";
import CreateEvent from "./components/Events/CreateEvent/CreateEvent";
import Events from "./components/Events/Events";
import FullEvent from "./components/Events/FullEvent/FullEvent";
import Header from "./components/Header/Header";
import "./components/Auth/Auth.sass";
import "./sass/base.sass";
import Auth from "./components/Auth/Auth";
import Preloader from "./components/UI/Preloader/Preloader";
function App() {
  const [isLoadingUser, setisLoadingUser] = useState(false);
  const [isLoadingPreloader, setisLoadingPreloader] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setisLoadingPreloader(false);
      } else {
        setisLoadingPreloader(true);
        setisLoadingUser(true);
      }
    });
  }, []);
  return (
    <div className="App">
      <div className="container">
        {isLoadingPreloader ? (
          isLoadingUser ? (
            <Auth />
          ) : (
            <Preloader className="preloader__minh100" />
          )
        ) : (
          <>
            <Header />
            <Switch>
              <Route exact path="/create-event" component={CreateEvent}></Route>
              <Route exact path="/events/:id" component={FullEvent}></Route>
              <Route exact path="/events" component={Events}></Route>
            </Switch>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
