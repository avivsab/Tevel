import React, {Component} from 'react';
import Fab from './Fab';
//import Loader from './Loader';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';


import './App.css';

import AddIcon from '@material-ui/icons/Add';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoding: true,
      isClicked: false,
      isSuccess: true,
    }
  }
  changeState = () => {
    this.setState({isLoding : !this.state.isLoding})
  }

  showSuccess = () => {
    this.setState({isSuccess: !this.state.isSuccess})
  }
  render(){
    const {isLoding} = this.state;
    const {isSuccess} = this.state;
  return (
    <div className="App">  
        <Fab isSuccess={isSuccess} buttons={[
        {icon: <AddIcon />, title: 'Title Exp 1', isLoding: this.state.isLoding,isClicked: this.state.isClicked,isSuccess: true, onClick:this.changeState},
        {icon:  <DeleteIcon />, title: 'Title Exp 2', isLoding: this.state.isLoding,isClicked: this.state.isClicked,isSuccess: true, onClick:this.showSuccess},
        {icon: <NavigationIcon />, title: 'Title Exp 3', isLoding: this.state.isLoding,isClicked: this.state.isClicked,isSuccess: true, onClick:this.showSuccess} 
        ]}/>   
    </div>
      );
    }
  }
 


export default App;
