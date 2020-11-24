import React from 'react';
import { Slider, Box, Grid, Container, Typography } from '@material-ui/core';

export default function CustomizedSlider(props) {
  // const { color, name, setParentValue } = props;
  const { name, defaultValue, setParentValue } = props;

  const [value, setValue] = React.useState(defaultValue);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" flexDirection="row">
      <Grid item xs={3}>
        <Typography id="discrete-slider-small-steps" gutterBottom>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Slider
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          valueLabelDisplay="auto"
          onChangeCommitted={(e, val) => {
            setParentValue(val);
          }}
        />
      </Grid>
    </Box>
  );
}

/*
  const PrettoSlider = withStyles({
    root: {
      color: color,
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  <PrettoSlider
    value={value}
    onChange={handleSliderChange}
    valueLabelDisplay="auto"
    aria-label="pretto slider"
  />
*/