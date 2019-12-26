import React from "react";
import {NavLink} from "react-router-dom";
import Header from "./header/header";
import ArticleContent from "./article/article";
import Footer from "./footer/footer";
import {addTaboolaLoader,displayTaboola} from "../services/adsCommon";


//import { Router, Link } from "@reach/router";

class Details extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
         this.fetchData = ['fetch1','fetch2'];
    }

    componentDidMount(){

        console.log('did mount called',this.state)
        addTaboolaLoader();
        displayTaboola();
    }

    componentDidUpdate(){
        console.log('update called',this.state)
    }
    printSomething(){
        console.log('clicked',this.props.staticContext)
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <ArticleContent data={this.props.staticContext}/>
                <Footer/>
                {/*<header>*/}
                {/*    <NavLink to="/abc">click to redirect {JSON.stringify(this.props.staticContext)}</NavLink>*/}
                {/*</header>*/}
                {/*<h1 onClick={()=>this.printSomething()}>Hello I m here</h1>*/}
            </React.Fragment>
        )
    }
};

export default Details;