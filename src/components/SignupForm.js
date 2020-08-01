import React, {Component} from 'react';
import Display from './Display';
  
class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.display ="";
  
        this.state= {
          username: "",
          password:"",
          age: 0,
          gender:"",
          occupation:"",
          done: false
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        if(event.target.name === "gender"){
            this.setState({gender: event.target.id});    
        }
        else {
            this.setState({[event.target.name]: event.target.value}); 
        }
    }


    handleSubmit(event) {
        this.display = JSON.stringify(this.state);
        this.setState({done:true});
        event.preventDefault();
    }

        render() {
          return (
            <div className= "SignupForm">
                <form onSubmit ={this.handleSubmit}>
                <div class = "inputField">
                <label>Username:</label> <input type="text" name ="username" onChange={this.handleChange} ></input></div>
                <div class = "inputField">
                <label>Password:</label> <input type="text" name ="password" onChange={this.handleChange} ></input></div>
                <div class = "inputField">
                <label>Age:</label> <input type="number" name ="age" onChange={this.handleChange} ></input></div>
                <div class = "inputField">
                <label>Gender:</label> 
                <div>
                <label>Male:</label> <input type="radio" name ="gender" id ="male" onChange={this.handleChange} ></input>
                <label>Female:</label> <input type="radio" name ="gender" id ="female" onChange={this.handleChange} ></input></div>
                </div>
                <div class = "inputField">
                <label>Occupation:</label> <input type="text" name ="occupation" onChange={this.handleChange} ></input></div>
                <button>Submit</button>
                </form>
                {this.state.done && 
                <Display data = {this.display} />}
            </div>
          )
        }
    }
    export default SignupForm;
    
    
   