import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
// custom components
import ImageUpload from '../components/ImageUpload';
import SliderList from '../components/SliderList';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    flexGrow: 1,
  },
  containerRoot: {
    padding: theme.spacing(25, 0, 55),
  }
}));

const galleryImageList = [
  "https://raw.githubusercontent.com/dxyang/StyleTransfer/master/style_imgs/mosaic.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dora-maar-picasso.jpg",
  "https://pbs.twimg.com/profile_images/925531519858257920/IyYLHp-u_400x400.jpg",
  "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dog.jpg",
  "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
];

export default function EditPage(props) {
  const classes = useStyles();
  const sliderList = [
    { color: '#52af77' },
    { color: '#52af77' },
    { color: '#52af77' },
    { color: '#52af77' },
  ]

  return (
    <Container className={classes.root}>
      <h2>Image Editor</h2>
      <Grid container spacing={3} className={classes.containerRoot} >
        <Grid item xs={6} sm={6}>
          <ImageUpload cardName="Input Image" imageGallery={galleryImageList} />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
          <SliderList sliderList={sliderList} />
        </Grid>
      </Grid>
    </Container>
  )
}