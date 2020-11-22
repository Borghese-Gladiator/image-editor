import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// custom components
import ImageUpload from '../components/ImageUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center"
  },
}));

export default function EditPage(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h2>Image Editor</h2>
      <ImageUpload />
    </Container>
  )
}