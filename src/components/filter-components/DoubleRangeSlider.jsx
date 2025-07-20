import React, { useCallback, useEffect, useRef } from "react";

const DoubleRangeSlider = ({ min, max, priceRange, setPriceRange }) => {
  const rangeRef = useRef(null);

  const width = "100%";
  const rangeColor = "#3b82f6"; // Tailwind's blue-500
  const currencyText = "€";

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(priceRange.min);
    const maxPercent = getPercent(priceRange.max);
    if (rangeRef.current) {
      rangeRef.current.style.left = `${minPercent - 5}%`;
      rangeRef.current.style.width = `${maxPercent - minPercent + 10}%`;
    }
  }, [priceRange, getPercent]);

  const handleMinChange = (e) => {
    const newMin = Math.min(Number(e.target.value), priceRange.max - 1);
    setPriceRange({ min: newMin, max: priceRange.max });
  };

  const handleMaxChange = (e) => {
    const newMax = Math.max(Number(e.target.value), priceRange.min + 1);
    setPriceRange({ min: priceRange.min, max: newMax });
  };

  return (
    <div className="flex flex-col items-center w-full space-y-2">
      <div className="w-full flex-col items-center justify-between text-content-100 font-semibold">
        <p>Price range</p>
        <div className="w-full flex items-center justify-between text-content-100 font-semibold">
          <span>
            {currencyText}
            {priceRange.min}
          </span>
          <span>
            {currencyText}
            {priceRange.max}
          </span>
        </div>
      </div>

      <div className="relative w-full" style={{ width }}>
        <input
          type="range"
          min={min}
          max={max}
          value={priceRange.min}
          onChange={handleMinChange}
          className="absolute -translate-x-2 mt-[3px] w-full pointer-events-none appearance-none bg-transparent
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:pointer-events-auto
            z-30 cursor-pointer"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={priceRange.max}
          onChange={handleMaxChange}
          className="absolute translate-x-2 mt-[3px] w-full pointer-events-none appearance-none bg-transparent
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:pointer-events-auto
            z-30 cursor-pointer"
        />

        <div className="relative h-2.5 bg-gray-300 rounded mt-2">
          <div
            ref={rangeRef}
            className="absolute h-2.5 rounded"
            style={{ backgroundColor: rangeColor }}
          />
        </div>
      </div>
    </div>
  );
};

export default DoubleRangeSlider;
