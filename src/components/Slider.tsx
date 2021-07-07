import RcSlider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { nearestMark } from "lib/slider";
import "./Slider.css";

const marks = {
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  100: 100,
};

const defaultValue = 10;

const Slider = () => {
  const [value, setValue] = useState(defaultValue);

  const snapToValue = (val: number) => {
    const newValue = nearestMark(val);
    setValue(newValue);
  };

  return (
    <div className="slider-container">
      <RcSlider
        min={10}
        max={100}
        marks={marks}
        step={10}
        value={value}
        defaultValue={10}
        onChange={snapToValue}
        className="slider"
      />
    </div>
  );
};

export default Slider;
