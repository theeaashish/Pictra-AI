import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Result from './pages/Result'
import Credit from './pages/Credit'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './components/Login'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'

function App() {

  const {showLogin} = useContext(AppContext);


  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-[#0E011D] h-screen overflow-y-scroll scrollbar-none'>
      <NavBar/>
      { showLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<Credit/>}/>
       </Routes>
       <Footer/>
  </div>
  )
}

export default App
