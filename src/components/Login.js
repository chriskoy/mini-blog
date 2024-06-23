import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import useFetch from "../hooks/useFetch";
import {loginSuccess} from '../store/actions';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // const userInfo = useSelector((state) => state.user)
    // const {
    //     data: user,
    //     isLoaded,
    //     error,
    //   } = useFetch("http://localhost:8000/user");
    
    const {
        data: user
      } = useFetch("http://localhost:8000/user?username="+ username);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // 登录逻辑，例如调用API验证用户名和密码
        // console.log(!window.location.pathname.startsWith('/login'));
        if(user[0]?.password === password){
            localStorage.setItem('user',JSON.stringify(user[0]))
            dispatch(loginSuccess(user[0]))
            navigate('/nav/home');
            setMessage('')
        }else{
            setMessage('账号或密码不正确！')
        }
        

    };

    return (
        <div className="login-container">
            <h1>登录</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">username：</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">password：</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">login</button>
            </form>
            <div className='msgFont'>{message}</div>
        </div>
    );
};

export default Login;
