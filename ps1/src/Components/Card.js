import React from "react";
import faker from "faker";
import Picture from "./SubComponents/Picture";
import Description from "./SubComponents/Description";
import NumberOfFriends from "./SubComponents/NumberOfFriends";

function Card(props){
    if(props.display === true){
      return(
        <div>
            <head>
              <title>PS2</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
            </head>
    
          <div className="ui card">
          <Picture source={props.image}/>
          <Description name={props.name} date={props.date} description={props.description}/>
          <NumberOfFriends number={props.friendNum}/>
        </div>
        </div>
        );
    }
    else{
      return(
        <div></div>
      );
    } 
}

export default Card;