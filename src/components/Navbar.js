import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      marginRight: theme.spacing(2),
    },
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '80px',
  },
}));

export default function PrimaryNavbar(props) {
  const classes = useStyles();
  const { logo } = props;
  
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.flexCenter}>
          <Button 
            aria-label={"back to home image"}
            color="inherit"
          >
            <Typography variant="h6" display="block" gutterBottom>
              {""}
            </Typography>
            <img src={logo} className={classes.logo} alt="logo" />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
