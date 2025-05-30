import React from "react";

function SidePanel({panelData, setActiveElement}) {

  return (<div className="w-25 h-100 bg-secondary pt-3">
{
    panelData.map((entry,index)=>(
      <div key = {index} onClick={()=>{setActiveElement(entry.element)}} className="border text-center p-3 mb-2 mx-3 cursor-pointer hover-bg-dark">{entry.title}</div>
    ))}
  </div>);
}

export default SidePanel;
