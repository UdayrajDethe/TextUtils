import Navbar from './componenets/Navbar';
import TextFrom from './componenets/TextFrom';
import './App.css';

function App() {
  return (
    <>
    <Navbar title="My App"/>
    <div className='container'>
      <TextFrom heading="Enter here your text"/>
    </div>
    </>
  );
}

export default App;
