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
  <div className='flex w-[300px] h-[100px] mt-5 ml-12 justify-center'> {/* Zmiana na flex */}
    <div className='w-[70px] h-[100px] flex justify-center items-center'>
      <AgreeButton onAgree={Agreement} />
    </div>
    <div className='w-[150px] h-[100px] flex justify-center items-center'> {/* Usunięcie relative */}
      <DisagreeeButton />
    </div>
  </div>
)}
      </div>
    </>
  )
}

export default App;
