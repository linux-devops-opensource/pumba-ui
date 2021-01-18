import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import nexusImg from '../../images/nexus.svg';
import artifactoryImg from '../../images/artifactory.png';

const images = [
  {
    source: nexusImg,
    title: 'nexus',
  },
  {
    source: artifactoryImg,
    title: 'artifactory',
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

export default function RepositorySelection() {
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