import React from 'react'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import pypiImg from '../../images/pypi.png';
import mavenImg from '../../images/maven.png';

const technologies = [
    { 
      name: 'pypi',
      image: pypiImg
    },
    { 
      name: 'maven',
      image: mavenImg
    },
]
const useStyles = makeStyles((theme) => ({
    Card: {
        
      },
      Media: {
        width: '30',  /*width of parent container*/
        height: '70px',/*height of parent container*/
        objectFit: 'contain',
        position: 'relative',

  top: '50%',
      },
      paper: {
        height: 140,
        width: 100,
      },
}));
const TechnologiesSelection = (props) => {    

    const classes = useStyles();  

    return (
        <div>
        <Grid container spacing={2}>
            <Grid item xs={1}>
            <Grid container justify="center" spacing={2}>

            <Paper className={classes.paper}>
                {technologies.map((tech) => (
                        <Paper variant={"imagesPath"}>      
                            {tech.name}                  
                            <img src={tech.image} />
                            
                        </Paper>
                ))} 
            </Paper>     
            </Grid>
            </Grid>

         </Grid>
        </div>
        
        
    )
}

export default TechnologiesSelection