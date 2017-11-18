import React, { Component } from "react";
import axios from "axios"
import storage from "../App/lib.js"

class SignUpNext extends Component {
  constructor(props){
  super(props);
    this.state = {
      school: "",
      firstName: "",
      lastName: "",
      weight: "",
      beltRank: ""
    };
  }

  componentWillMount(){
  // localStorage.clear("fighter1")

  }

  componentWillUpdate(props, state){
    localStorage.setItem("fighter1", JSON.stringify(this.state))
    
    localStorage.setItem("fighter2", JSON.stringify(this.state))
    // localStorage.clear("state")
      // console.log("state, ", this.state)
  }
  handleSchool(e) {
    this.setState({
      school: e.target.value
    });
  }
  handlefirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  handlelastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  handleWeight(e) {
    this.setState({
      weight: e.target.value
    });
  }
  handleBeltRank(e) {
    this.setState({
      beltRank: e.target.value
    });
  }
  handleSubmit(evt){
    //add axios function to passdown to other componets to use
    evt.preventDefault()
    let newState = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        weight: this.state.weight,
        beltRank: this.state.beltRank,
        school: this.state.school
      }
      
      localStorage.setItem("state", newState)
  }

  render() {
    console.log("state: ", this.state);
    return (
      <div>
        <h1>Register</h1>
        <form>
          First Name:{" "}
          <input type="text" onChange={this.handlefirstName.bind(this)} />
          <br />
          Last Name:
          <input type="text" onChange={this.handlelastName.bind(this)} />
          <br/>
          Weight:
          <input type="text" onChange={this.handleWeight.bind(this)} />
          <br/>
          Rank:
          <input type="text" onChange={this.handleBeltRank.bind(this)} />
          <br/>
          <button onChange ={this.handleSubmit.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }
}
export default SignUpNext;
