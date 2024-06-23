// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import {BrowserRouter, Route,Routes,Navigate} from "react-router-dom";
// import Create from "./components/Create";
// import BlogDetails from "./components/BlogDetails";
// import NotFound from "./components/NotFound"
// import Login from "./components/Login";
import Routers from "./router/router";
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function App() {
  const navigate = useNavigate()
  const userInfo= useSelector((state) => state.user)


  useEffect(() => {
    // if (localStorage.getItem('user')?.length > 0) {
    //   navigate('/nav/home')
    // } else {
    //   navigate('/login')
    // }
    if (userInfo?.username) {
      navigate('/nav/home')
    } else {
      navigate('/login')
    }
  }, [])
  return (
    <div className="App">
      {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" replace />}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/home" element={<><Navbar /><Home/></>}/>
                    <Route path="/create/*" element={<><Navbar /><Create/></>}/>
                    <Route path="/blogs/:id" element={<><Navbar /><BlogDetails/></>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>


            </BrowserRouter> */}
        <Routers></Routers>
    </div>
  );
}

export default App;
