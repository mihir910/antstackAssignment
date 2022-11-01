// How to handle onlick from a parent component and change its state
import './App.css';
import { useState } from 'react'; 
import reactDom from 'react-dom';
import DisplayComponent from './components/DisplayComponent';

function App() {

  const [count, setCount] = useState(0) // Name it however you wish

  function handleAddEmployee()
  {
    return setCount(count + 1);
  }

  function handleViewData()
  {

//     console.log([<DisplayComponent />]);
//     [<DisplayComponent/>].map((Component,i) => console.log(Component))
  }

  return (
    <div className="App">
      <DisplayComponent></DisplayComponent>
      {[...Array(count)].map((_, i) => <DisplayComponent key={i} />)}
      <div className='container mt-2' style={{ "textAlign": 'center' }}>
        <button className='btn btn-secondary' onClick={() => handleAddEmployee()}>Add Employee</button>
      </div>
      <div className='container mt-2' style={{ "textAlign": 'center' }}>
        <button className='btn btn-secondary' onClick={() => handleViewData()}>View Data</button>
      </div>
    </div>
  );
}

export default App;
