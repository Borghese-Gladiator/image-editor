import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
// custom components
import ImageUpload from '../components/ImageUpload';
import SliderList from '../components/SliderList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerRoot: {
    padding: theme.spacing(10, 0, 30),
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

// each slider has unique identifer id
const sliderList = [
  { id: 1, color: '#52af77', name: "Blur" },
  { id: 2, color: '#32a852', name: "Brightness" },
  { id: 3, color: '#3292a8', name: "Contrast" },
  { id: 4, color: '#5e5e5e', name: "Drop Shadow" },
  { id: 5, color: '#5e5e5e', name: "Grayscale" },
  { id: 6, color: '#5e5e5e', name: "Hue Rotate" },
  { id: 7, color: '#5e5e5e', name: "Invert" },
  { id: 8, color: '#5e5e5e', name: "Opacity" },
  { id: 9, color: '#5e5e5e', name: "Saturate" },
  { id: 10, color: '#5e5e5e', name: "Sepia" }
];

export default function EditPage() {
  const classes = useStyles();
  const [filterObjList, setFilterObjList] = React.useState([
    { id: 1, value: 20, name: "Blur" },
    { id: 2, value: 20, name: "Brightness" },
    { id: 3, value: 20, name: "Contrast" },
    { id: 4, value: 20, name: "Drop Shadow" },
    { id: 5, value: 20, name: "Grayscale" },
    { id: 6, value: 20, name: "Hue Rotate" },
    { id: 7, value: 20, name: "Invert" },
    { id: 8, value: 20, name: "Opacity" },
    { id: 9, value: 20, name: "Saturate" },
    { id: 10, value: 20, name: "Sepia" }
  ])
  const updateImageFilter = (newVal, id) => {
    setFilterObjList(
      filterObjList.map((item, idx) => {
        if (item.id === id) {
          item.value = newVal;
          return item;
        }
        return item;
      })
    )
  }

  return (
    <Container className={classes.root}>
      <Grid container spacing={3} className={classes.containerRoot} >
        <Grid item xs={6} sm={6}>
          <ImageUpload cardName="Input Image" imageGallery={galleryImageList} filterObjList={filterObjList} />
        </Grid>
        <Grid item xs={6} sm={6}>
          <SliderList sliderList={sliderList} updateImageFilter={updateImageFilter} />
        </Grid>
      </Grid>
    </Container>
  )
}