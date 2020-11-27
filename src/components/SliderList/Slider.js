import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { OutlinedInput, Slider, Box, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 70,
    height: 30
  },
});

export default function InputSlider(props) {
  const classes = useStyles();
  // const { color, name, setParentValue } = props;
  const { name, defaultValue, maxValue, setParentValue } = props;
  const [value, setValue] = React.useState(defaultValue);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    setParentValue(event.target.value === '' ? value : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > maxValue) {
      setValue(maxValue);
    }
  };

  return (
    <Box my={2} display="flex" flexDirection="row">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={2}>
          <Typography id="discrete-slider-small-steps" gutterBottom>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Slider
            value={typeof value === 'number' ? value : 0}
            max={maxValue}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="auto"
            onChangeCommitted={(e, val) => {
              setParentValue(val);
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <OutlinedInput
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: maxValue,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            label="Name"
          />
        </Grid>
      </Grid>
    </Box>
  );
}


/*

          <TextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
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