import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';

// custom components
import BackdropStepper from './BackdropStepper';

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
  logo: {
    height: '80px',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
  negativeMarginUp: {
    marginTop: -40
  }
}));

export default function NavbarWithInstructions(props) {
  const classes = useStyles();
  const { logo, getSteps, getStepContent } = props;
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
    console.log(open);
  };
  
  return (
    <div>
        <AppBar position="static">
          <Toolbar className={classes.flexCenter}>
            <div className={classes.grow} />
            <Button 
              aria-label={"back to home image"}
              color="inherit"
            >
              <Typography variant="h6" display="block" gutterBottom>
                {""}
              </Typography>
              <img src={logo} className={classes.logo} alt="logo" />
            </Button>
            
            <div className={classes.grow} />

            <ClickAwayListener onClickAway={handleClose}>
              <div>
                <Button variant="contained" color="secondary" onClick={handleToggle} >
                  HOW TO USE
                </Button>
                {open ? (
                  <Backdrop className={classes.backdrop} open={open}>
                    <Container style={{display: "flex"}}>
                      <BackdropStepper getSteps={getSteps} getStepContent={getStepContent} />
                      <Fab color="secondary" aria-label="add" onClick={handleClose} className={classes.negativeMarginUp}>
                        <CancelIcon fontSize="large" />
                      </Fab>
                    </Container>
                  </Backdrop>
                ) : null}
              </div>
            </ClickAwayListener>
          </Toolbar>
        </AppBar>
    </div>
  );
}


