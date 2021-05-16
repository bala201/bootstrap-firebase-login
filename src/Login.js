import React, {Component} from "react";
import fire from "./fire";
import 'bootstrap/dist/css/bootstrap.min.css'
import{Button,Alert,Breadcrumb,Card,Form,Container,Row,Col} from 'react-bootstrap'

class Login extends Component {
    constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.signup=this.signup.bind(this);
        this.state={
            email:"",
            password:""
        }
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div>
            <Container fluid>
            <Form>
    
              <Row>
                <Col md>
                  
              <Form.Group>
              
              <Form.Label>Email Address</Form.Label>
              <Form.Control id="email" name="email" onChange={this.handleChange}
              value={this.state.email} type="email" placeholder="example@gmail.com"/>
              <Form.Text className="text-muted">We will never share your email address , trust us!</Form.Text>
    
              </Form.Group>
            
              
                </Col>
                <Col md>
                <Form.Group>
              
                <Form.Label>Password</Form.Label>
                <Form.Control id="password" name="password" onChange={this.handleChange}
                value={this.state.password} type="password" placeholder="****** "/>
                
                
                </Form.Group>
                </Col>
              </Row>
            
              <Row><Col>
              <button class="btn btn-outline-success" onClick={this.login}>Login</button>{' '}
              </Col><Col><button class="btn btn-outline-primary" onClick={this.signup}>Signup</button>
              </Col></Row>    
            </Form>
    
            <Card style={{color:"#000"}}>
            
            <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg"/>
            <Card.Body>
            
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is an examble of react cards</Card.Text>
            
            <Button variant="primary">Read More</Button>
    
    
            </Card.Body>
    
            
            </Card>  
          
          <Breadcrumb>
            
            <Breadcrumb.Item>Test1</Breadcrumb.Item>
            <Breadcrumb.Item active>Test2</Breadcrumb.Item>
            <Breadcrumb.Item>Test3</Breadcrumb.Item>
           
            
            </Breadcrumb> 
          <Alert variant="success">this is a Button</Alert>
            <Button>Test Button</Button>
            </Container>
            </div>
        );
    }
}
export default Login;