import { useState } from "react";

export default function ColorPicker({ onColorSelected }: { onColorSelected: (color: string) => void }) {
  // Use a state to track the currently selected color
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // Define the colors in an array for easier management
  const colors = [
    `CornflowerBlue`,
    `DarkBlue`,
    `DodgerBlue`,
    `SkyBlue`,
    `PowderBlue`,
    `RoyalBlue`,
    `SteelBlue`,
    `Teal`,
    `DeepSkyBlue`,
    `Turquoise`,
    `Cyan`,
    `PaleTurquoise`,
    `Indigo`,
    `DarkMagenta`,
    `BlueViolet`,
    `MediumOrchid`,
    `Plum`,
    `SlateBlue`,
    `DarkSlateBlue`,
    `DeepPink`,
    `Magenta`,
    `Thistle`,
    `AntiqueWhite`,
    `Bisque`,
    `Black`,
    `Chocolate`,
    `Darkorange`,
    `Coral`,
    `Crimson`,
    `Maroon`,
    `FireBrick`,
    `OrangeRed`,
    `Tomato`,
    `DarkSalmon`,
    `RosyBrown`,
    `BurlyWood`,
    `DarkGoldenRod`,
    `SaddleBrown`,
    `DarkSlateGray`,
    `DarkGreen`,
    `DarkOliveGreen`,
    `Chartreuse`,
    `DarkSeaGreen`,
    `ForestGreen`,
    `LightGreen`,
    `LimeGreen`,
    `MediumSeaGreen`,
    `MediumSpringGreen`,
    `YellowGreen`,
    `GhostWhite`,
    `Gold`,
    `GoldenRod`,
    `IndianRed`,
    `LightPink`,
    `LightSkyBlue`,
    `LightSteelBlue`,
    `Linen`,
    `MistyRose`,
    `NavajoWhite`,
    `SlateGray`,
  ];

  const chunkedColors = (colors: string[], size: number) =>
    colors.reduce((resultArray: any[][], item, index) => {
      const chunkIndex = Math.floor(index / size);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
  },[]);

  const colorGroups = chunkedColors(colors, 10);
  
  function onColorSelect(color: string) {
    // Toggle the selected state for the color
    setSelectedColor(currentColor => {
      const newColor = currentColor === color ? null : color;
      onColorSelected(newColor || 'defaultColor'); // Replace 'defaultColor' as needed
      return newColor;
    });
  }

  return (
    <>
    <div className="color-picker">
      {colorGroups.map((group, index) => (
        <div key={index} className="board-row">
          {group.map((color) => (
            <button
              key={color}
              className={`picker-square ${selectedColor === color ? 'selected' : ''}`}
              style={{ background: color }}
              onClick={() => onColorSelect(color)}
            ></button>
          ))}
        </div>
      ))}
    </div>
    </>
  );
}
