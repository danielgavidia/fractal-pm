"use client";

import { valueToColor } from "@/utils/valueToColor";
import { useState } from "react";

const ColorEditor = () => {
  const [hue, setHue] = useState<number>(180);
  const [saturation, setSaturation] = useState<number>(50);
  const [lightness, setLightness] = useState<number>(50);
  const color = valueToColor(hue, saturation, lightness);

  return (
    <div className="flex flex-col space-y-2">
      {/* Hue */}
      <input
        type="range"
        min="0"
        max="360"
        value={hue}
        onChange={(e) => setHue(Number(e.target.value))}
        style={{
          background: color,
        }}
      />
      {/* Saturation */}
      <input
        type="range"
        min="0"
        max="100"
        value={saturation}
        onChange={(e) => setSaturation(Number(e.target.value))}
        style={{
          background: color,
        }}
      />
      {/* Lightness */}
      <input
        type="range"
        min="0"
        max="100"
        value={lightness}
        onChange={(e) => setLightness(Number(e.target.value))}
        style={{
          background: color,
        }}
      />
      <div className="p-4" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ColorEditor;
