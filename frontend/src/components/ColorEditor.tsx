"use client";

import { useState } from "react";

const ColorEditor = () => {
  const [color, setColor] = useState<number>(0);
  return (
    <input
      type="range"
      min="0"
      max="360"
      value={color}
      onChange={(e) => setColor(Number(e.target.value))}
      // style={{
      //   background: rgb,
      // }}
    />
  );
};

export default ColorEditor;
