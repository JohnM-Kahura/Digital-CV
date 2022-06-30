import Register from "./components/register";
import CV from "./components/cv";
import Test from "./components/test";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Test />
          </Route>
          <Route path="/cv">
            <CV />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
