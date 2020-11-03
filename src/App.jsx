import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage.component';
import './App.css';
import Collection from "./pages/collection/collection.component";
import ShopPage from './pages/shop/shop-page';
import SignIn from './pages/singIn/singIn';



const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path='/shop/:collection' component={Collection}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/sign-in' component={SignIn}/>
      <Route path='/' component={Homepage} />
      <Homepage />
    </Switch>
  </div>
);

export default App;
