import { Route, Switch } from "react-router-dom";
import CreateEvent from "./components/Events/CreateEvent/CreateEvent";
import Events from "./components/Events/Events";
import FullEvent from "./components/Events/FullEvent/FullEvent";
import Header from "./components/Header/Header";
import "./sass/base.sass";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/create-event" component={CreateEvent}></Route>
          <Route exact path="/events/:id" component={FullEvent}></Route>
          <Route exact path="/events" component={Events}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
