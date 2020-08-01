import React, {Component} from 'react';
import './App.css';
import SignupForm from './components/SignupForm';



class App extends Component {
    render() {
      return (
        <div className="App"> 
            <SignupForm />
        </div>
      );
    }
  }


export default App;
