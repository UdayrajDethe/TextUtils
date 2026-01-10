import Navbar from './componenets/Navbar';
// import About from './componenets/About';
import TextFrom from './componenets/TextFrom';
import './App.css';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const click = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} click={click}/>
    <div className='container my-3'>
      <TextFrom heading="Enter here your text" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
