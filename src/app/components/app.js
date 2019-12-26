import React from "react";
import { Route, Switch } from 'react-router-dom';
import Details from "./detail";
import Dummy from "./dummy";
import {getUrl,fetchData} from "../../models/loadData";

//import './app.css';

 class App extends React.Component{
     constructor(props){
         super(props)
         this.state={
             data:'adomf dfd'
         }
         //console.log(this.staticContext)
     }

     componentDidMount(){
         console.log('mount is here');

     }
     render() {
         return (
                 <Switch>
                     <Route exact render={(props)=>{return <Details {...props}/>}} path="/"/>
                     <Route render={(props)=><Dummy {...props}/>} path="/abc"/>
                 </Switch>
         );
     }
};

export default App;