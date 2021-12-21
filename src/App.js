import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const [modePurple, setDarkModePurple] = useState('light')
  const [modeBlue, setDarkModeBlue] = useState('light')
  const [modeGreen, setDarkModeGreen] = useState('light')


const  toggleModePurple = ()=>{
    if(modePurple==='light'){
      setMode('dark');
      setDarkModePurple('dark');
      document.body.style.backgroundColor = 'purple';
      showAlert("Purple Mode has been enabled","dark");
      document.title="TextUtils - Purple Mode";
    }
    else{
      setDarkModePurple('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","dark");

    }
    
  }
  const  toggleModeBlue = ()=>{
    if(modeBlue==='light'){
      setMode('dark');
      setDarkModeBlue('dark');
      document.body.style.backgroundColor = 'blue';
      showAlert("Blue Mode has been enabled","primary");
      document.title="TextUtils - Blue Mode";
    }
    else{
      setDarkModeBlue('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","dark");

    }
    
  }
  const  toggleModeGreen = ()=>{
    if(modeGreen==='light'){
      setMode('dark');
      setDarkModeBlue('dark');
      document.body.style.backgroundColor = 'green';
      showAlert("Green Mode has been enabled","success");
      document.title="TextUtils - Green Mode";
    }
    else{
      setDarkModeGreen('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","dark");

    }
    
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModePurple={toggleModePurple}  toggleModeBlue={toggleModeBlue} toggleModeGreen={toggleModeGreen} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;