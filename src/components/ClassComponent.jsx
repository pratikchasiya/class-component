import React, {Component, Fragment} from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      number: 35,
      arr : []
    }
    setInterval(()=>{
        this.state.arr.push('Pratik')
        console.log(this.state.arr)
        // this.setState({
        //     array : [...this.state.arr]
        // })
        this.state.number = this.state.number + 1
        console.log(this.state.number)
        this.setState({
            number : this.state.number,
            arr : [...this.state.arr]  
        })
        
    },2000)
  } 
  render() {
    return <Fragment>
        <h5>Number : {this.state.number}</h5>
        <h5>Array : {this.state.arr.join(" , ")}</h5>
    </Fragment>;
  }
}

export default ClassComponent;
