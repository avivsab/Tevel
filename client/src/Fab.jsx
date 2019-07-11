import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import { teal } from '@material-ui/core/colors';
import './App.css';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(-3),
    marginRight: theme.spacing(5),
    zIndex: 2
  },
  success: {
      background:  'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fabProgress: {
    color: teal[700],
    position: 'relative',
    bottom: 38.5,
    right: 34,
    // zIndex: 2,
  },
}));

const theme = createMuiTheme({
    overrides: {
      MuiTooltip: {
        tooltip: {
          fontSize: "1em",         
          backgroundColor: "#008a93",
          right: "85px",
          bottom: '65px',
          position: 'relative'
        }
      }
    }
  });

export default function FloatingActionButtons(props) {
  const classes = useStyles();
  const {isSuccess, isLoding} = props;
  const btns = props.buttons;
  return (   
      <div className="fabClass">
    {console.log(props, isSuccess, btns)} 
      {
          btns.map((btn, i) => (
              <Fragment key={i}>     
            <Tooltip title={btn.title} aria-label="Add" className="toolTip">
            <Fab color="primary"
             aria-label="Add" 
             onClick={()=>btn.onClick(i)}
             className={[classes.fab, isSuccess ? classes.success : undefined].join(' ')
             }>
            {btn.icon}
             </Fab>
               </Tooltip>
            {!isLoding && <CircularProgress size={68} className={classes.fabProgress} />}
            <MuiThemeProvider theme={theme}>
        <Tooltip title="">
          <div></div>
        </Tooltip>
      </MuiThemeProvider>
            </Fragment>
          ))
      }  
    </div> 
   );
  };
  
   
  