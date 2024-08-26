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
