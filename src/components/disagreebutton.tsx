import React, { useState } from 'react'

const DisagreeeButton = () => {

    const [positionRight, setPositionRight] = useState(0);
    const [positionLeft, setPositionLeft]  = useState(0);
    const [positionBot, setPositionBot] = useState(0);
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
      <div 
        className={`px-5 py-2 bg-red-600 text-white cursor-pointer rounded-full flex justify-center items-center transition-all duration-200`}
        style={{ 
          position: 'relative', // Dodanie position relative
          transform: `translate(${positionLeft}px, ${positionTop}px)` // Zmiana na transform
        }}
        onMouseEnter={RandomPosition} 
        onClick={RandomPosition}
      >
        No!
      </div>
    );
}

export default DisagreeeButton;