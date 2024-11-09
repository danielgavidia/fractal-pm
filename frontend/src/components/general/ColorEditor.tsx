"use client";

import { valueToColor } from "@/utils/valueToColor";
import { useState } from "react";

interface Color {
  hue: number;
  saturation: number;
  lightness: number;
}

interface ColorEditorProps {
  title: string;
  value?: Color;
  onChange?: (color: Color) => void;
}

const ColorEditor = ({ title, value, onChange }: ColorEditorProps) => {
  const [hue, setHue] = useState<number>(value?.hue || 180);
  const [saturation, setSaturation] = useState<number>(value?.saturation || 50);
  const [lightness, setLightness] = useState<number>(value?.lightness || 50);

  const handleHueChange = (newHue: number) => {
    setHue(newHue);
    onChange?.({ hue: newHue, saturation, lightness });
  };

  const handleSaturationChange = (newSaturation: number) => {
    setSaturation(newSaturation);
    onChange?.({ hue, saturation: newSaturation, lightness });
  };

  const handleLightnessChange = (newLightness: number) => {
    setLightness(newLightness);
    onChange?.({ hue, saturation, lightness: newLightness });
  };

  const color = valueToColor({ hue, saturation, lightness });

  return (
    <div className="flex flex-col space-y-1 py-2 border-b-[0.5px]">
      <p className="text-xs font-semibold">{title}</p>
      <div className="flex space-x-2 w-full items-center justify-between">
        <div className="flex-1">
          {/* Hue */}
          <div className="w-full flex space-x-2 py-1 items-center">
            <div className="min-w-20 text-xs">Hue</div>
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => handleHueChange(Number(e.target.value))}
              style={{ background: color }}
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
              onChange={(e) => handleSaturationChange(Number(e.target.value))}
              style={{ background: color }}
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
              onChange={(e) => handleLightnessChange(Number(e.target.value))}
              style={{ background: color }}
              className="flex-1"
            />
          </div>
        </div>

        {/* Color display */}
        <div className="p-8 rounded-full" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default ColorEditor;
