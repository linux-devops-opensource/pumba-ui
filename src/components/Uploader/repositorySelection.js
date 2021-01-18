import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import nexusImg from '../../images/nexus.svg';
import artifactoryImg from '../../images/artifactory.png';

const images = [
  {
    source: nexusImg,
    title: 'nexus',
    host: 'nexus.app.com'
  },
  {
    source: artifactoryImg,
    title: 'artifactory',
    host: 'artifactory.app.az.com'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  image: {
    height: 100,
    width: 100,
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
  text: {
    'font-weight': 'bold',
  }
}));

export default function RepositorySelection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {images.map((image) => (
            <Button variant="contained">
            <div>
                <img src={image.source} key={image.title} className={classes.image}/>
                <Typography variant="h6" className={classes.text}>
                  {image.host}
                </Typography>
                </div>
            </Button>
        ))}
    </div>
  );
}