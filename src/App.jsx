import {  Navigate, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import NavBar from "./NavBar"
import Login from "./Login"
import PageNotFound from "./PageNotFound"
import College from './College'
import Student from "./Student"
import Department from "./Department"
import Detail from "./Detail"
import Users from "./Users"
import UserDetail from "./UserDetail"
function App() {

  return (
    <>
      {/* <NavBar/> */}
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route parh="/user">
          <Route path="/user/about" element={<About />} />
          <Route path="/user/login" element={<Login />} />  
          </Route>
          <Route path="/users/list?" element={<Users />} />
          

          <Route path="/users/:id/:name?" element={<UserDetail/>}/>
        </Route>


        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="detail" element={<Detail />} />
        </Route>
        {/* <Route path="/*" element={<PageNotFound/>}/> */}
        {/* <Route path="/*" element={<Navigate to="<Login/>" />} / > */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </>
  )
}

export default App
