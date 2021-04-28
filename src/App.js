import { Route, Switch } from "react-router-dom";
import Events from "./components/Events/Events";
import Header from "./components/Header/Header";
import "./sass/base.sass";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/events" component={Events}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
