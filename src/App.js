
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggle = ()=>{
    if (mode === 'light')
    {
    setMode('dark')
    document.body.style.backgroundColor = '#05386a'
    showAlert('Dark moode has been enabled',"success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert('Light moode has been enabled',"success")
  }
}
  return (
    <>
    <Router>
     <Navbar titleText="TextUtils" aboutText="About TextUtils" mode={mode} toggle={toggle}/>
     <Alert alert={alert}/>
     {/* <About/> */}
     <div className="container">
     <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
          <TextForm mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
     
     </div>
     </Router>
    </>
  );
}

export default App;
