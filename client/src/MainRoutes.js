import { useContext } from "react";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

const MainRoutes = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Home/> : <Register/>}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
        <Route path="/messenger" element={!user ? <Navigate to="/"/> : <Messenger/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
    </div>
  )
  
}

export default MainRoutes;