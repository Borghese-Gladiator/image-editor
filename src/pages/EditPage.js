import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center"
  },
}));

export default function EditPage(props) {
  const classes = useStyles();
  const { a } = props;
  return (
    <Container className={classes.root}>
      <h2>Image Editor</h2>
    </Container>
  )
}