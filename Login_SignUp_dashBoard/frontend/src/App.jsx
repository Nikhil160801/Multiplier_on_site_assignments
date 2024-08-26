// // import { useEffect, useState } from 'react'
// import { useEffect} from 'react'
// export default function App() {
// // const [data, setData] = useState([]);

// useEffect(()=> {
// fetch('http://localhost:8081/signupdetails')
// .then(res => res.json())
// .then(data =>console.log(data))
// .catch(err => console.log("this is error",err));
// },[])

// return (
// <div>
  
// </div>
// )

// }


import LoginForm from "./components/Login_form"
import SignUpForm from "./components/SignUpForm"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLogin from "./components/UserLogin"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm></LoginForm>}></Route>
        <Route path='/Signupform' element={<SignUpForm></SignUpForm>}></Route>
        <Route path='/UserLogin' element={<UserLogin></UserLogin>}> </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
