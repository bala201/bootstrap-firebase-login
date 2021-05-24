import React, {Component} from "react";
import fire from "./fire"
import 'bootstrap/dist/css/bootstrap.min.css'
import{Button} from 'react-bootstrap'
//import ReactPlayer from 'react-player'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import logo from './logo.svg';

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    logout(){
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
              







               <Navbar bg="dark" variant="dark" sticky="top" expand="xl" collapseOnSelect>
      
        <Navbar.Brand >
          <img src={logo} width="40px" height="40px" />{'      '}
          Logo 
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Products">
          
          <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
          <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
          <NavDropdown.Item href="#products/badham">Badham</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item href="#products/boost">Boost</NavDropdown.Item>

          </NavDropdown>
        <Nav.Link href="#products">Blog</Nav.Link>
        <Nav.Link href="#products">About Us</Nav.Link>
        <Nav.Link href="#products">Contact Us</Nav.Link>
        </Nav>



        

        </Navbar.Collapse>


        <div>
        <button class="btn btn-danger"  onClick={this.logout}>Logout</button>{' '}

        </div>
        
       
      
      </Navbar>









                <div class="lg">
                
                You are logged in...
                
                </div>









      
     
      

            </div>
        );
    }
}
export default Home;