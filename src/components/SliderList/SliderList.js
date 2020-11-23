import React from 'react';
import Slider from './Slider';

export default function SliderList(props) {
  const { sliderList } = props;

  return (
    <div>
      {sliderList.map((val, idx) => {
        return (
          <Slider color={val.color} name={val.name} />
        )
      })}
    </div>
  )
}