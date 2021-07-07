import RcSlider from "rc-slider";
import "rc-slider/assets/index.css";
import { FunctionComponent, useState } from "react";
import { nearestMark } from "lib/slider";
import "./Slider.css";
import { defaultNumHitsPerPage } from "lib/constants";

const marks = {
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  100: 100,
};

interface SliderProps {
  onChange: (value: number) => void;
}

const Slider: FunctionComponent<SliderProps> = ({ onChange }) => {
  const [value, setValue] = useState(defaultNumHitsPerPage);

  const snapToValue = (val: number) => {
    const newValue = nearestMark(val);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="slider-container">
      <RcSlider min={10} max={100} marks={marks} step={10} value={value} onChange={snapToValue} className="slider" />
    </div>
  );
};

export default Slider;
