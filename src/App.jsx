import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './pages/Footer/Footer'
import Navbar from './pages/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[90%] mx-auto'>
     <section className='mb-44 mx-auto '>
     <Navbar />
     </section>
      <Outlet />
      <section className='mt-10'>
      <Footer></Footer>
      </section>
    </div>
  )
}

export default App
