import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Product from './Components/Product.js';
import ProductItems from './Components/ProductItems';
import NavBar from './Components/NavBar'

function RouteConfig() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route exact path="/product" component={Product} />
            <Route path="/product/:id" component={ProductItems} />
            <Route path="*" component={() => <h1>404 Not Found</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouteConfig;
