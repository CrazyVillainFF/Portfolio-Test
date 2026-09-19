import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './modulers/Login'
import Register from './modulers/Register'

function App(){
  return(
    <>
    <section id='center'>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </BrowserRouter>
   </section>
    </>
  )
}
       
export default App;
