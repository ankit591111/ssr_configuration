import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./detail";

 class App extends React.Component{
     constructor(props){
         super(props)
         this.state={
             data:'adomf dfd'
         }
     }

     componentDidMount(){
         console.log('mount is here')
     }
     render() {
         return (
             <div>
                 <header>
                     <Link to="/">{this.state.data}</Link>
                 </header>
                 <Router>
                     <Details path="/"/>
                 </Router>
             </div>
         );
     }
};

export default App;