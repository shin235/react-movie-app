// 이제부터 App.js에서는 영화를 보여주지 않고, router를 render한다.
// router: URL를 보고있는 component. http://localhost:3000/에 있다면, Home component를 보여주게 될 것이다.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  ); //<Route path="/"> : going to home
  //  <Route path="/movie/:id"> id는 userid로 항상 변해. variables in URL
}

export default App;
