import { useState } from "react";

export default function ColorPicker() {
  const [value, setValue] = useState(null);

  function handleClick() {
    // set selected color to style background value
    
  }

  return (
    <div className="color-picker">
      <button className="picker-square" style={{ background: 'red' }} onClick={handleClick}></button>
      <button className="picker-square" style={{ background: 'orange' }} onClick={handleClick}></button>
      <button className="picker-square" style={{ background: 'yellow' }} onClick={handleClick}></button>
      <button className="picker-square" style={{ background: 'green' }} onClick={handleClick}></button>
      <button className="picker-square" style={{ background: 'blue' }} onClick={handleClick}></button>
      <button className="picker-square" style={{ background: 'purple' }} onClick={handleClick}></button>
    </div>
  );
}