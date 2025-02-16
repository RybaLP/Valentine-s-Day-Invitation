import React, { useState } from 'react'

const DisagreeeButton = () => {

    const [positionRight, setPositionRight] = useState(0);
    const [positionLeft, setPositionLeft]  = useState(120);
    const [positionBot, setPositionBot] = useState(60);
    const [positionTop, setPositionTop] = useState(0);

    const GeneratreRandomNumber = () : number => {
        const number = Math.floor(Math.random() * 200);
        return number;
    }

    const RandomPosition = () => {
        setPositionRight(GeneratreRandomNumber());
        setPositionBot(GeneratreRandomNumber());
        setPositionLeft((GeneratreRandomNumber()) / 1.5);
        setPositionTop((GeneratreRandomNumber()) / 2.5);
    }


  return (
    <div className={`p-2 bg-red-600 rounded-3xl cursor-pointer absolute w-15 h-15 flex justify-center items-center transition-all duration-200 ml-27`}
    style={{top: `${positionTop}px`, left: `${positionLeft}px`, right: `${positionRight}px`, bottom : `${positionBot}px`}}
    onMouseEnter={RandomPosition} onClick={RandomPosition}>No!</div>
  )
}

export default DisagreeeButton;