import { useState } from 'react'
import Firstheader from './components/firstheader.jsx'
import './App.css'
import Secheader from './components/secheader.jsx';
import Thirdheader from './components/thirdheader.jsx';
import { Carouselfunc } from './components/carousel.jsx';
import { MultiCar } from './components/multicar.jsx';
import { Footer } from './components/footer.jsx';
import { Listfunc } from './components/list.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' bg-gray-200'>
        <div>
          <Firstheader />
        </div>
        {/* <div className='bg-white border-b border-gray-300 w-full pl-0 ml-0'> */}
        <Secheader />
        {/* </div> */}
        <div className=' mb-1'>
          <Thirdheader />
        </div>
        <Carouselfunc />
        <MultiCar />
        <div className='mt-2 flex flex-wrap justify-around h-full w-full sm:flex-col sm:space-y-4 md:flex-row md:space-x-6 '>
          <img src="/images/info.png" alt="" className="h-full"  />
          <Listfunc/>
        </div>

        <div className=' mb-0'>
          <Footer />  
        </div>

      </div>

    </>

  )
}

export default App
