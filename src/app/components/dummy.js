import React from "react";

class Dummy extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('did mount called')
    }

    printSomething(){
        console.log('clicked')
    }

    render() {
        //console.log(this.props)
        return (
            <div onLoad={()=>this.printSomething()}>
                <h1>Dummy I m here</h1>
            </div>
        )
    }


};

export default Dummy;