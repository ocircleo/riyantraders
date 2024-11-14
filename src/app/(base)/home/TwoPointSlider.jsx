import React, { useState } from 'react';

function TwoPointSlider({ min = 0, max = 100, step = 1 }) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  // Handle change for minimum value
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
  };

  // Handle change for maximum value
  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
  };

  return (
    <div className="w-full px-4 py-10">
      <div className="relative w-full">
        {/* Slider Track */}
        <div className="absolute inset-0 h-2 bg-gray-300 rounded-full"></div>
        
        {/* Selected Range Highlight */}
        <div
          className="absolute h-2 bg-blue-500 rounded-full"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}
        ></div>

        {/* Minimum Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-2 opacity-0 pointer-events-none"
          style={{
            zIndex: minValue > max - 10 ? 5 : 3,
          }}
        />

        {/* Maximum Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-2 opacity-0 pointer-events-none"
          style={{
            zIndex: maxValue < min + 10 ? 5 : 3,
          }}
        />

        {/* Handles */}
        <div
          className="absolute h-4 w-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${((minValue - min) / (max - min)) * 100}%`, top: '50%' }}
        ></div>
        <div
          className="absolute h-4 w-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${((maxValue - min) / (max - min)) * 100}%`, top: '50%' }}
        ></div>
      </div>

      {/* Display Selected Range */}
      <div className="mt-4 text-center text-gray-700">
        Selected Range: {minValue} - {maxValue}
      </div>
    </div>
  );
}

export default TwoPointSlider;
