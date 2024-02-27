import { useState } from "react";

export default function ColorPicker({ onColorSelected }: { onColorSelected: (color: string) => void }) {
  // Use a state to track the currently selected color
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // Define the colors in an array for easier management
  const colors = ['orange', 'red', 'yellow', 'green', 'blue', 'purple'];

  function handleClick(color: string) {
    // Toggle the selected state for the color
    setSelectedColor(currentColor => {
      const newColor = currentColor === color ? null : color;
      onColorSelected(newColor || 'defaultColor'); // Replace 'defaultColor' as needed
      return newColor;
    });
  }

  return (
    <div className="board-row">
      {colors.map((color) => (
        <button
          key={color}
          className={"picker-square " + (selectedColor === color ? 'selected' : '')}
          style={{ background: color }}
          onClick={() => handleClick(color)}
        ></button>
      ))}
    </div>
  );
}
