import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Customers from './Customers';
import Rentals from './Rentals';
import Login from './Login';
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
ReactDOM.render(
 <Router>
     <Navbar/>
     <Switch>
         <Route path="/Customers">
             <Customers/>
         </Route>

         <Route path="/Rentals">
             <Rentals/>
         </Route>

         <Route path="/Login">
             <Login/>
         </Route>

         <Route path="/">
             <App/>
         </Route>
     </Switch>
 </Router>,
document.getElementById('root')
);


