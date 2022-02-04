import React from 'react';
import DisplayComponent from './DisplayComponent';

export default function AddEmployeeButton() {

//      <Fragment>
//     <button onClick={() => }>Click me</button>
//   </Fragment>
    // function handleAddEmployee(event)
    // {
    //     // setCount(count + 1);
    //     console.log(event)
    // }

  return (
    <div className='container mt-2' style={{"textAlign": 'center'}}>
          <button type='button' className='btn btn-secondary'>Add Employee</button>  
          {/* <button type='button' className='btn btn-secondary' onClick={(e)=> handleAddEmployee(e)}>Add Employee</button>   */}
    </div>);
}
