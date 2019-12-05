import React from "react";

//import { Router, Link } from "@reach/router";

class Details extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('did mount called')
    }

    render() {
        return (
            <div>
                <h1>Hello I m here</h1>
            </div>
        )
    }


};

export default Details;