"use client";

import { useState, ReactElement } from 'react';
import Square from './square';
import ColorPicker from "@/components/ColorPicker";

export default function Canvas() {
  const [selectedColor, setSelectedColor] = useState<string>('black'); // Default color
  const [rowCount, setRowCount] = useState<number>(16); // Default number of rows
  const [squaresPerRow, setSquaresPerRow] = useState<number>(20); // Default number of squares per row

  const rows = Array.from({ length: rowCount }, (_, rowIndex) => (
    <div className="board-row" key={rowIndex}>
      {Array.from({ length: squaresPerRow }, (_, squareIndex) => (
        <Square color={selectedColor} key={squareIndex} />
      ))}
    </div>
  ));

  return (
    <>
      <div id="canvas-sizer">
        <label>
          Number of Rows:
          <input type="number" value={rowCount} onChange={(e) => setRowCount(parseInt(e.target.value) || 0)} />
        </label>
        <label>
          Squares per Row:
          <input type="number" value={squaresPerRow} onChange={(e) => setSquaresPerRow(parseInt(e.target.value) || 0)} />
        </label>
      </div>
      <div className="board">
        {rows}
      </div>
      <ColorPicker onColorSelected={setSelectedColor} />
    </>
  );
}
