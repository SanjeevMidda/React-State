import React from "react";
import "../styles.css";

export default function Circle(props){
    return(
        <div className="circle">
            {props.letter}
        </div>
    )
}