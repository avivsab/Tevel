import React from 'react';
import './Loader.css';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <div className="loader">
      <CircularProgress disableShrink />
      </div>
    </div>
  );
}