import { useState } from 'react';

export default function Square() {
  const [value, setValue] = useState<string | null>(null);
  
  function handleClick() {
    if (value === null) {
      setValue(
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none"><path stroke="#000" stroke-linecap="round" stroke-width="4" d="M32 32 2 2M2 32 32 2"/></svg>
      );
    } else {
      setValue(null);
    }
  }

  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}