import Navbar from './componenets/Navbar';
// import About from './componenets/About';
import TextFrom from './componenets/TextFrom';
import './App.css';
import { useState } from 'react';
import Alert from './componenets/Alert';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const click = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} click={click}/>
    <Alert alert = {alert}/>
    <div className='container my-3'>
      <TextFrom heading="Enter here your text" showAlert={showAlert} mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
