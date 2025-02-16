import { useState } from 'react'
import AgreeButton from './components/agreebutton';
import DisagreeeButton from './components/disagreebutton';

import './App.css'

function App() {
  const [display, setDisplay] = useState(true);

  const Agreement = () => {
    setDisplay(false);
  }

  return (
    <>
      <div className='flex flex-col items-center text-center'>

        {display ? (
          <div className='text-3xl sm:text-4xl'>
            <h2>Do you want...</h2>
            <h2>To be my Valentine?👾</h2>
            <div className='max-w-[250px] sm:max-w-[300px] shadow-lg mt-5 mx-auto'>
              <img src={'cutegif.gif'} alt="Cute GIF" className='rounded-3xl w-full'/>
            </div> 
          </div>
        ) : (
          <div>
            <img src={'thankyougif.gif'} alt="Thank You GIF" className='max-w-[250px] sm:max-w-[300px] mx-auto'/>
          </div>
        )}

        {display && (
          <div className="mt-5 flex flex-col justify-center gap-5 sm:gap-10 w-15 max-w-md">
             <AgreeButton onAgree={Agreement} />
             <div className='absolute'>
              <DisagreeeButton/>
             </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App;
