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
function App() {
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoadingUser(true);
      } else {
        setIsLoadingUser(false);
      }
    });
  }, []);
  return (
    <div className="App">
      <div className="container">
        {isLoadingUser ? (
          <>
            <Header />
            <Switch>
              <Route exact path="/create-event" component={CreateEvent}></Route>
              <Route exact path="/events/:id" component={FullEvent}></Route>
              <Route exact path="/events" component={Events}></Route>
            </Switch>
          </>
        ) : (
          <Auth />
        )}
      </div>
    </div>
  );
}

export default App;
