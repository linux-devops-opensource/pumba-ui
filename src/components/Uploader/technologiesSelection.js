import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';

import pypiImg from '../../images/pypi.png';
import mavenImg from '../../images/maven.png';
import rpmImg from '../../images/rpm.png';
import npmImg from '../../images/npm.png';

const images = [
  {
    source: pypiImg,
    title: 'Pypi',
  },
  {
    source: mavenImg,
    title: 'Maven',
  },
  {
    source: rpmImg,
    title: 'RPM',
  },
  {
    source: npmImg,
    title: 'NPM',
  }
];

const useStyles = makeStyles((theme) => ({
  image: {
    position: 'relative',
    height: 80,
    width: 80,
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  boxProp: {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '5rem', height: '5rem' },
  }
}));

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  style: { width: '5rem', height: '5rem' },
};

export default function TechnologiesSelection() {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center" spacing={2}>
            {images.map((image) => (
              <Grid item>
              <Box borderRadius={16} {...defaultProps}>
                <ButtonBase
                  focusRipple
                  key={image.title}
                  className={classes.image}
                  focusVisibleClassName={classes.focusVisible}
                  style={{
                    width: classes.image.width,
                  }}
                  >
                    <span 
                      className={classes.imageSrc}
                      style={{ backgroundImage: `url(${image.source})` }} />
                      <span className={classes.imageBackdrop} />
                      <span className={classes.imageButton}>
                    </span>
                </ButtonBase>
                </Box>
              </Grid>
            ))}
      </Grid>
    </div>
  );
}