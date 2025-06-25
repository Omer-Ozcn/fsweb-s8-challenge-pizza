import { useState } from 'react';
import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/success" component={Success} />
      </Switch>
    </>
  )
}

export default App;
