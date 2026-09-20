import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './modulers/login'
import Register from './modulers/Register'
import Home from './modulers/Home'

function App(){
  return(
    <>
    <section>
   <BrowserRouter>
   <Routes>
    <Route id="center" path='/login' element={<Login/>}/>
    <Route id='center' path='/register' element={<Register/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
   </section>
    </>
  )
}
       
export default App;
