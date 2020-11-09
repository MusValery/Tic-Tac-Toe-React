import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import './App.css';
import Collection from "./pages/collection/collection.component";
import Shop from './pages/shop/shop';
import CheckoutPage from './pages/checkout/checkout';
import Auth from './pages/auth/auth';
import './App.css';



const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path='/checkout' component={CheckoutPage} />
      <Route path='/auth' component={Auth} />
      <Route path='/shop/:collection' component={Collection}/>
      <Route path='/shop' component={Shop}/>
      <Route path='/' component={Homepage} />
      <Homepage />
    </Switch>
  </div>
);

export default App;
