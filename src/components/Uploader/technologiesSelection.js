import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  image: {
    position: 'relative',
    height: 60,
    width: 60,
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
}));

export default function Helper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {images.map((image) => (
            <Button variant="contained">
                <img src={image.source} key={image.title} className={classes.image}/>
            </Button>
        ))}
    </div>
  );
}