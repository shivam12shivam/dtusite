import { useState } from 'react'
import Firstheader from './components/firstheader.jsx'
import './App.css'
import Secheader from './components/secheader.jsx';
import Thirdheader from './components/thirdheader.jsx';
import { Carouselfunc } from './components/carousel.jsx';
import { MultiCar } from './components/multicar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          <Firstheader/>
        </div>
        {/* <div className='bg-white border-b border-gray-300 w-full pl-0 ml-0'> */}
        <Secheader/>
        {/* </div> */}
        <div className=' mb-1'>
        <Thirdheader/>
        </div>
        <Carouselfunc/>
        <MultiCar/>
      </div>
    </>

  )
}

export default App
