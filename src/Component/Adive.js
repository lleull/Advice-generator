import React, { useEffect } from "react";
import "./advice.css";
import dice from "./icon-dice.svg";
import { useState } from "react";
import divider from './pattern-divider-desktop.svg'
const Advice = () => {
  const [adivces, setadivces] = useState();

  const fetchdata = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");

    try {
      const data = await response.json();
      setadivces(data);
    } catch (error) {
      console.log("error");
    }
  };
  console.log(adivces)
 useEffect(()=> {
    fetchdata();
  },[])
  
  
  return (
    <div className="advicebox">
      <h1>Advice: #{adivces ?  adivces.slip.id : ""}</h1>
      <p>"{adivces ? adivces.slip.advice: ''}"</p>
      <div className="logo">
      <img className="divider" src={divider} alt="sd"/>

      </div>
      <button onClick={fetchdata}>
        {" "}
        <img src={dice} alt="sd" />
      </button>
    </div>
  );
};

export default Advice;
