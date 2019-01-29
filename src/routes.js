import React from "react";
import {Route, Switch} from "react-router-dom"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Classlist from "./components/ClassList/ClassList";
import Student from "./components/Student/Student";


export default(
<Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/About" component={About}/>
    <Route path="/Classlist/:class" component={Classlist}/>
    <Route path="/Student/:id" component={Student}/>
</Switch>
)