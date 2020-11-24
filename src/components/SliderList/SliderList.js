import React from 'react';
import Slider from './Slider';

export default function SliderList(props) {
  const { sliderList, updateImageFilter } = props;

  return (
    <div>
      {sliderList.map((val, idx) => {
        const handleChange = (newVal) => {
          updateImageFilter(newVal, val.id)
        }

        return (
          <Slider
            key={`${val.displayName}-${val.idx}`}
            color={val.color}
            name={val.displayName}
            defaultValue={val.defaultVal}
            maxValue={val.maxVal}
            setParentValue={handleChange}
          />
        )
      })}
    </div>
  )
}