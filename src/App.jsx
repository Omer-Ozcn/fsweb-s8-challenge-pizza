import { useState } from 'react';
import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/order">
          <Order setOrderData={setOrderData} />
        </Route>
        <Route path="/success">
          <Success orderData={orderData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;