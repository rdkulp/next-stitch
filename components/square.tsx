import { useState, ReactElement } from 'react';

export default function Square({ color }: { color: string }) {
  const [value, setValue] = useState<ReactElement | null>(null);
  
  function handleClick() {
    if (value === null) {
      setValue(
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none">
          <path stroke={color} strokeLinecap="round" strokeWidth="4" d="M32 32 2 2M2 32 32 2"/>
        </svg>
      );
    } else {
      setValue(null);
    }
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
