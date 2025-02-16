import React, { useState } from 'react';

interface AgreeButtonProps {
  onAgree : () => void;
}

const AgreeButton: React.FC<AgreeButtonProps> = ({onAgree}) => {

  return (
    <>
        <div className="px-5 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition pointer" onClick={
          onAgree
        }>
          Yes!
        </div>    
    </>
  );
}

export default AgreeButton;
