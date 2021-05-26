import './App.css';
//import {BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom';
//import { useHistory } from 'react-router';

import React,{ Component } from 'react';
import fire from './fire.js';
import Home from './Home.js';
import Login from './Login.js';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import logo from './logo.svg';
import { First } from 'react-bootstrap/esm/PageItem';

class App extends Component {
  //const history=useHistory();
  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user:null})
      }
    })
  }
  
  render(){
  return (
   
    
       
    this.state.user?(<Home/>):(<Login/>)

  );
}
}

export default App;
