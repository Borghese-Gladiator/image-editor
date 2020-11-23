import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        TastePerfect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  bottomNav: {
    width: 500,
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <footer className={classes.footer}>
      <Container align="center">
        <BottomNavigation value={value} onChange={handleChange} className={classes.bottomNav}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon fontSize="large" />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon fontSize="large" />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon fontSize="large" />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon fontSize="large" />} />
        </BottomNavigation>
      </Container>
      <br />
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
