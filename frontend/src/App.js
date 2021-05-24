import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Insert from './screens/Insert';
import Home from "./screens/Home";


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Insert} />
          <Route exact path="/view" component={Home} />
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App;
