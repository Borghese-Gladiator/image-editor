import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
// resizable package
import { Resizable, ResizableBox } from 'react-resizable';
// custom components
import ImageUpload from '../components/ImageUpload';
import SliderList from '../components/SliderList';
import './blah.css'

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
// REMOVED drop-shadow(0px 0px 0px black)
const sliderList = [
  { id: 1, color: '#52af77', displayName: "Blur", defaultVal: 0, maxVal: 30 },
  { id: 2, color: '#32a852', displayName: "Brightness", defaultVal: 100, maxVal: 200 },
  { id: 3, color: '#3292a8', displayName: "Contrast", defaultVal: 100, maxVal: 200 },
  { id: 4, color: '#5e5e5e', displayName: "Grayscale", defaultVal: 0, maxVal: 100 },
  { id: 5, color: '#5e5e5e', displayName: "Hue Rotate", defaultVal: 0, maxVal: 360 },
  { id: 6, color: '#5e5e5e', displayName: "Invert", defaultVal: 0, maxVal: 100 },
  { id: 7, color: '#5e5e5e', displayName: "Opacity", defaultVal: 0, maxVal: 100 },
  { id: 8, color: '#5e5e5e', displayName: "Saturate", defaultVal: 0, maxVal: 100 },
  { id: 9, color: '#5e5e5e', displayName: "Sepia", defaultVal: 0, maxVal: 100 }
];

export default function EditPage() {
  const classes = useStyles();
  const [filterObjList, setFilterObjList] = React.useState([
    { id: 1, value: 0, name: "blur", defaultVal: "0px" },
    { id: 2, value: 100, name: "brightness", defaultVal: "100%" },
    { id: 3, value: 100, name: "contrast", defaultVal: "100%" },
    { id: 4, value: 0, name: "grayscale", defaultVal: "0%" },
    { id: 5, value: 0, name: "hue-rotate", defaultVal: "0deg" },
    { id: 6, value: 0, name: "invert", defaultVal: "0%" },
    { id: 7, value: 100, name: "opacity", defaultVal: "100%" },
    { id: 8, value: 100, name: "saturate", defaultVal: "100%" },
    { id: 9, value: 0, name: "sepia", defaultVal: "0%" }
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
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.containerRoot} >
        <ResizableBox
          className="custom-box box"
          width={600}
          height={200}
          handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
          handleSize={[8, 8]}
          resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
        >
          <ImageUpload cardName="Input Image" imageGallery={galleryImageList} filterObjList={filterObjList} />
        </ResizableBox>
        <Grid item xs={6} sm={6}>
          <Typography variant="h4">
            Filters
          </Typography>
          <SliderList sliderList={sliderList} updateImageFilter={updateImageFilter} />
        </Grid>
      </Grid>
    </div>
  )
}


/*
<ResizableBox className="box" width={200} height={200} minConstraints={[100, 100]} style={{background: "black"}}>
<ImageUpload cardName="Input Image" imageGallery={galleryImageList} filterObjList={filterObjList} />
</ResizableBox>
*/