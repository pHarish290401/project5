import React from 'react';
class Data extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
            count:0
        }
    }
    countIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    countDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.countIncrement}>Click to Increment</button>
                <button onClick={this.countDecrement}>Click to Decrement</button>
            </div>
        )
    }
}

export default Data;