import './App.css';
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Component/Layout.js';
import Home from './Component/Home';
import Registration from './Component/Registration';
import Login from './Component/Login';


function App() {

  const [userName,setUserName] = useState('');
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [registeredUser,setRegisteredUser] = useState([]);

  const handleLogin = (email, password) => {
    // Check if user exists in registeredUsers array
    const user = registeredUser.find((user) => user.email === email && user.password === password);
    if (user) {
      setIsLoggedIn(true);
      console.log('Login successful');
    } else {
      console.log('Invalid credentials');
    }
  };

  const handleRegistration = (email,password,name) => {

     const userExist = registeredUser.some((user) => user.email === email);

    if(userExist){
      console.log("User Already Exist");
    }
    else{
      const newUser = {email,password,name};
      setUserName(name);
      setRegisteredUser([...registeredUser,newUser]);
      console.log("registration Sucessfully");
    }
  };

  return (
    <>
      {/* <div className="login">
        {isLoggedIn ? (
          <h1>Welcome, {userName}</h1>
        ):(
          <div className="handleUser">
            <Login handleLogin={handleLogin} />
            <Registration handleRegistration={handleRegistration} />
          </div>
        )}
      </div> */}
      <div className="container">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout/> }>
              <Route index element={<Home />} />
              <Route path="registration" element={<Registration />} />
              <Route path="login" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
