"use client";

import { valueToColor } from "@/utils/valueToColor";
import { useState } from "react";

interface ColorEditorProps {
  title: string;
}

const ColorEditor = ({ title }: ColorEditorProps) => {
  const [hue, setHue] = useState<number>(180);
  const [saturation, setSaturation] = useState<number>(50);
  const [lightness, setLightness] = useState<number>(50);
  const color = valueToColor({ hue, saturation, lightness });

  return (
    <div className="flex flex-col space-y-1 py-2 border-b-[0.5px]">
      <p className="text-xs font-semibold">{title}</p>
      <div className="flex space-x-2 w-full items-center">
        <div>
          {/* Hue */}
          <div className="w-full flex space-x-2 py-1 items-center">
            <div className="min-w-20 text-xs">Hue</div>
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(Number(e.target.value))}
              style={{
                background: color,
              }}
              className="flex-1"
            />
          </div>

          {/* Saturation */}
          <div className="w-full flex space-x-2 py-1 items-center">
            <div className="min-w-20 text-xs">Saturation</div>
            <input
              type="range"
              min="0"
              max="100"
              value={saturation}
              onChange={(e) => setSaturation(Number(e.target.value))}
              style={{
                background: color,
              }}
              className="flex-1"
            />
          </div>

          {/* Lightness */}
          <div className="w-full flex space-x-2 py-1 items-center">
            <div className="min-w-20 text-xs">Lightness</div>
            <input
              type="range"
              min="0"
              max="100"
              value={lightness}
              onChange={(e) => setLightness(Number(e.target.value))}
              style={{
                background: color,
              }}
              className="flex-1"
            />
          </div>
        </div>

        {/* Color display */}
        <div className="w-full p-8 rounded-full" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default ColorEditor;
