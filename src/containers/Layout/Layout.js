import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { TheContent } from '../index'

  const drawerWidth = 240;
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    },   
  }));
   

const TheLayout = () => {  
  const classes = useStyles();  
  
  return (    
      <div className="c-wrapper">
        <TheContent/> 
      </div>
  )
}

export default TheLayout
