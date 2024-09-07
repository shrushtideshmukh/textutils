import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>
  {
    setAlert({
      msg: message,
      type: type
    })
    
  }

  setTimeout(()=>{
    setAlert(null);
  }, 2000);

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }
 
  const toggleMode =(cls) =>{ 
    removeBodyClasses();
    document.body.classList.add('bg-'+ cls)
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled ", "success ");
      //document.title = "Text Utils - Dark Mode";

      // setInterval(() => {
      //   document.title = "Text Utils is amazing";
      // }, 1500);

      // setInterval(() => {
      //   document.title = "Install Text Utils Now";
      // }, 2000);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled ", "success ");
      //document.title="Text Utils - Light Mode";
    }
  }
  return (
    <>
    {/* <Navbar title="Text Utils" about='About us' /> */}
      <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} about='About us'/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        {/* /users --> 1 component   //agar exact use nhi kiya to.......
            /users/home --> 2 component */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces' mode={mode} />} />
        </Routes>
      </div>
      </Router>
    </>
  ); 
}

export default App;
