import React from "react";

function Picture(props){
    return(
        <div className="image">
        <img src={props.source} alt="image"/>
      </div>
    );
}

export default Picture;