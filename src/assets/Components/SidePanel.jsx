import React, { useState } from "react";

function SidePanel({ panelData, setActiveElement }) {
  const [isVisible, setVisible] = useState(true);
  if(!isVisible) {return (
    <div className="cursor-pointer ms-2 mt-2"
      onClick={() => {
        setVisible(true);
      }}>
      <i className="bi bi-list bg-light"></i>
    </div>
  );}
  return (
    <div className={`w-25 bg-secondary pt-3 h-screen ${isVisible?"d-block":"d-none"}`}>
      <div className="text-end px-3 mb-2 cursor-pointer" onClick={()=>{setVisible(false)}}>
        <i class="bi bi-x-square bg-light"></i>
      </div>
      {panelData.map((entry, index) => (
        <div
          key={index}
          onClick={() => {
            setActiveElement(entry.element);
          }}
          className="border text-center p-3 mb-2 mx-3 cursor-pointer hover-bg-dark">
          {entry.title}
        </div>
      ))}
    </div>
  );
}

export default SidePanel;
