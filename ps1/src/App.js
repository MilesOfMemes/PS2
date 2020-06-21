import React, { Component } from "react";
import Picture from "./Components/SubComponents/Picture";
import Description from "./Components/SubComponents/Description";
import NumberOfFriends from "./Components/SubComponents/NumberOfFriends";
import Card from "./Components/Card";
import faker from "faker";
import "./App.css";
//import url("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"); //is @import required?
//https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css


//find a way to randomize the images. 
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      //randCard1: [theImage:"", the],
      //randCard2:,
     // randCard3:,
      randCardValues: [
        {theImage: faker.image.avatar(), theName:faker.name.findName(), theDescription:faker.lorem.sentence(), theDate:faker.random.number({'min':1996,'max':2020}), theFriendNum:faker.random.number(),} ,
        {theImage: faker.image.avatar(), theName:faker.name.findName(), theDescription:faker.lorem.sentence(), theDate:faker.random.number({'min':1996,'max':2020}), theFriendNum:faker.random.number(),} ,
        {theImage: faker.image.avatar(), theName:faker.name.findName(), theDescription:faker.lorem.sentence(), theDate:faker.random.number({'min':1996,'max':2020}), theFriendNum:faker.random.number(),} ,
      ],
      randCardValuesCopy: [],
      originalData: true,
      display:true,
    };

    console.log("HELLO MILES");
    console.log(this.state.randCardValues[1].theName);
  };

  //make blank values to start, then call randomize values x3 and store each set. 
  /*
  randomizeValues = () => {
    this.setState( (prevState) => ({
      randCardValues:[
        //...prevState.randCardValues, //copies previous array
        {theImage: faker.image.avatar(), theName:faker.name.findName(), theDescription:faker.lorem.sentence(), theDate:faker.random.number({'min':1996,'max':2020}), theFriendNum:faker.random.number(), },
        {theImage: faker.image.avatar(), theName:faker.name.findName(), theDescription:faker.lorem.sentence(), theDate:faker.random.number({'min':1996,'max':2020}), theFriendNum:faker.random.number(), },
        {theImage: faker.image.avatar(), theName:faker.name.findName(), theDescription:faker.lorem.sentence(), theDate:faker.random.number({'min':1996,'max':2020}), theFriendNum:faker.random.number(), },
      ]
    }));

    console.log(this.state.randCardValues.length);
    console.log(this.state.randCardValues[0].theImage);
    console.log("HELLO MILES");
  };
  */
    //randImage:        faker.image.avatar(),
    //randName:         faker.name.findName(),
    //randDescription:  faker.lorem.sentence(),
    //randDate:         faker.random.number({'min':1996,'max':2020}),
    //randFriendNum:    faker.random.number(),

  mackey = () => {
    if(this.state.originalData === true){
      this.setState((prevState) => ({
        randCardValuesCopy:[...prevState.randCardValues],
        originalData: false,
        randCardValues: [
          {theImage: "https://mackey.cis.uafs.edu/images/am.jpg", theName:"Mackey", theDescription:"Super smash bros champion", theDate:prevState.randCardValues[0].theDate, theFriendNum:prevState.randCardValues[0].theFriendNum,} ,
          {theImage: "https://mackey.cis.uafs.edu/images/am.jpg", theName:"Mackey", theDescription:"Super smash bros champion", theDate:prevState.randCardValues[1].theDate, theFriendNum:prevState.randCardValues[1].theFriendNum,} ,
          {theImage: "https://mackey.cis.uafs.edu/images/am.jpg", theName:"Mackey", theDescription:"Super smash bros champion", theDate:prevState.randCardValues[2].theDate, theFriendNum:prevState.randCardValues[2].theFriendNum,} ,
        ],
      }));
    }
    else{ 
      this.setState({
        randCardValues:this.state.randCardValuesCopy,
        originalData:true,
      });
    }
  };

  display = () =>{
    if(this.state.display === true){
      this.setState({
        display:false,
      });
    }
    else{
      this.setState({
        display:true,
      });
    }
    
  };


  render(){
    let randName = faker.name.findName();
    return (
      <div class ="ui link cards">
      <Card image={this.state.randCardValues[0].theImage} name={this.state.randCardValues[0].theName} description={this.state.randCardValues[0].theDescription} date={this.state.randCardValues[0].theDate} friendNum={this.state.randCardValues[0].theFriendNum} display={this.state.display}/>
      <Card image={this.state.randCardValues[1].theImage} name={this.state.randCardValues[1].theName} description={this.state.randCardValues[1].theDescription} date={this.state.randCardValues[1].theDate} friendNum={this.state.randCardValues[1].theFriendNum} display={this.state.display}/>
      <Card image={this.state.randCardValues[2].theImage} name={this.state.randCardValues[2].theName} description={this.state.randCardValues[2].theDescription} date={this.state.randCardValues[2].theDate} friendNum={this.state.randCardValues[2].theFriendNum} display={this.state.display}/>
      <button onClick={() => this.mackey()}>Mackey</button>
      <button onClick={() => this.display()}>Display</button>
      </div>
    );
  }
}

export default App;