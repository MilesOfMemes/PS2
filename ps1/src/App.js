import React, { Component } from "react";
import Picture from "./Components/Picture";
import Description from "./Components/Description";
import NumberOfFriends from "./Components/NumberOfFriends";
import faker from "faker";

import "./App.css";
//import url("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"); //is @import required?

//https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css



function App() {
  let randName = faker.name.findName();
    return (
      <div>
        <head>
          <title>Title</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
        </head>

        <div class="card">
          <div>
            <Picture randomPicture={faker.image.avatar()} />

            <Description randomDesc={faker.random.words()} randName={faker.name.findName()} randJoinDate={faker.random.number({min:1996,max:2020})}/>
            
            <NumberOfFriends randomNum={faker.random.number({min:0,max:250})}/>
          </div>
        </div>

        <div>
          <Picture randomPicture={faker.image.avatar()}/>
          <Description randomDesc={faker.random.words()} randName={faker.name.findName()} randJoinDate={faker.random.number({min:1996,max:2020})}/>
          <NumberOfFriends randomNum={faker.random.number({min:0,max:250})}/>
        </div>


        <div>
          <Picture randomPicture={faker.image.avatar()}/>
          <Description randomDesc={faker.random.words()} randName={faker.name.findName()} randJoinDate={faker.random.number({min:1996,max:2020})}/>
          <NumberOfFriends randomNum={faker.random.number({min:0,max:250})}/>
        </div>
      </div>
    );
}


export default App;