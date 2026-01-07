import Navbar from './componenets/Navbar';
import TextFrom from './componenets/TextFrom';
import './App.css';

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className='container my-3'>
      <TextFrom heading="Enter here your text"/>
    </div>
    </>
  );
}

export default App;
