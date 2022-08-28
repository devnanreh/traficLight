import React, { useState } from "react";
import "./TraficLightStyle.css";

export const TraficLight = () => {
  const [color, setColor] = useState("");
  const [purpleColor, setpurpleColor] = useState("noPurpleColor");

  const showPurple = () => {
    // eslint-disable-next-line eqeqeq
    purpleColor == false ? setpurpleColor("noPurpleColor") : setpurpleColor("");
  };

  const NewColorLight = () => {
    return (
      <div
        id={purpleColor}
        onClick={() => setColor("purple")}
        className={color === "purple" ? "purpleLightOn" : "purpleLight"}
      ></div>
    );
  };

  return (
    <>
      <div className="traficLight">
        <div
          onClick={() => setColor("red")}
          className={color === "red" ? "redLightOn" : "redLight"}
        ></div>
        <div
          onClick={() => setColor("yellow")}
          className={color === "yellow" ? "yellowLightOn" : "yellowLight"}
        ></div>
        <div
          onClick={() => setColor("green")}
          className={color === "green" ? "greenLightOn" : "greenLight"}
        ></div>
        <NewColorLight />
      </div>
      <button className="addPurpleButton" onClick={showPurple}>
        Add Purple
      </button>
    </>
  );
};
