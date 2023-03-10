import React from "react";
import {useState} from "react";
import "../styles.css";

export default function Circle(){

    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

    const [letter, setLetter] = useState("B");

    function randomNumber(){
        return Math.floor(Math.random() * letters.length);
    }

    function amend(){
        setLetter(
            letters[randomNumber()]
        )
    }

    return(
        <div className="circle2" onClick={amend}>
            {letter}
        </div>
    )
}