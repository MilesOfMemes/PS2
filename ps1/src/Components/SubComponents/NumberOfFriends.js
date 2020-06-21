import React from "react";

function NumberOfFriends(props){
    return(
        <div className="extra content">
        <a>
          <i className="user icon"></i>
          {props.number} Friends
        </a>
      </div>
    );
}




export default NumberOfFriends;