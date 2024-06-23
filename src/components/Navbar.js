import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { logoutSuccess } from "../store/actions";

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [user,setUser] = useState(null)
  const userInfo= useSelector((state) => state.user)
  
  useEffect(()=>{
    // setUser(JSON.parse(localStorage.getItem('user')))
    setUser(userInfo)
  },[])

  const logout=(e)=>{
    // e.preventDefault();
    localStorage.removeItem('user')
    dispatch(logoutSuccess())
    navigate('/login')

  }

  return (
    <>
      <nav className="navbar">
        <h1>{user?.username}’ Blog</h1>
        <div className="links">
          <Link to="/nav/home">Home</Link>
          <Link to="/nav/create" style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px'
          }}>New Blog</Link>
        </div>
          <button style={{color: '#f1356d'}} onClick={logout}>logout</button>
      </nav>
      <Outlet/>
    </>
  )
}