import React, { Component } from "react";
import "./OnBoard.css"

class OnBoard extends Component {
  super(props) {
    this.state = {
      fighter1school: "",
      fighter1firstName: "",
      fighter1lastName: "",
      fighter1weight: "",
      fighter1beltRank: "",

      fighter2school: "",
      fighter2firstName: "",
      fighter2lastName: "",
      fighter2weight: "",
      fighter2beltRank: "",
    };
	}
	
	componentWillMount(){
  console.log("onboard: ", this.state)
    // add axios if database is to be created

    let state = localStorage.getItem("fighter1")
    console.log(state)
    if(state === null){
        this.setState({
        fighter1school: "",
        fighter1firstNam: "",
        fighter1lastName: "",
        fighter1weight: "",
        fighter1beltRank: "",
        
        fighter2school: "",
        fighter2firstName: "Luigi",
        fighter2lastName: "Bro",
        fighter2weight: "170",
        fighter2beltRank: "White",
      
      });
    }else{ 
      const localValue = Object.values(JSON.parse(state)) //assign the values of the local storages 
      const localKey = Object.keys(JSON.parse(state))
         console.log("keys ", localKey[1]) // display selected keys
      this.setState({ 

        fighter1school: localValue[0],
        fighter1firstName:localValue[1],
        fighter1lastName: localValue[2],
        fighter1weight: localValue[3],
        fighter1beltRank: localValue[4],

        fighter2school: "",
        fighter2firstName: "Luigi",
        fighter2lastName: "Bro",
        fighter2weight: "170",
        fighter2beltRank: "White",
      });
    }
  }
  
  
  

  render() {
    return (
      <div id = "onBoardContainer">
        <h1>OnBoard {this.state.fighter1beltRank} belt {this.state.fighter1weight}</h1>
        <form className = "OnBoard">

					<div id = "fighter1name"className = "fighter1">
					{this.state.fighter1firstName} {this.state.fighter1lastName}
					</div>
					{/* <div id = "fighter1school" className = "fighter1">
						School: {this.state.fighter1school}
					</div> */}
					{/* <div id = "fighter1weight" className = "fighter1">
					 Weight: {this.state.fighter1weight}
					</div>
					<div id = "fighter1rank" className = "fighter1">
						Rank: {this.state.fighter1beltRank}
					</div> */}
     
          {/* <br/> */}
          <h3> VS </h3>

          <div id = "fighter2name" className = "fighter2">
						 {this.state.fighter2firstName} {this.state.fighter2lastName}
					</div>
					{/* <div id = "fighter2school" className = "fighter2">
						School: {this.state.fighter2school}
					</div> */}
					{/* <div id = "fighter2weight" className = "fighter2">
					 Weight: {this.state.fighter2weight}
					</div>
					<div id = "fighter2rank" className = "fighter2">
						Rank: {this.state.fighter2beltRank}
					</div> */}
        </form>
      </div>
    );
  }
}
export default OnBoard;
