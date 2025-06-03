import React from 'react'
import { logout } from '../values';

function TitleBar({title}) {
  return (
    <div className="p-3 m-0 bg-dark text-white d-flex justify-content-between align-items-center">
      <h4 className='mb-0'>{title}</h4> 
      <button className="btn btn-danger" onClick={()=>{logout();}}>Log Out</button>
    </div>
  );
}

export default TitleBar