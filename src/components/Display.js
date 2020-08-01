import React, {Component} from 'react';


class Display extends Component {
        render() {
          let display = JSON.parse(this.props.data);
          return (
            <div className= "Display">
                <h4>You entered: </h4>
                <p>
                  Username: {display.username} <br />
                  Password: {display.password} <br />
                  Age: {display.age} <br />
                  Gender: {display.gender} <br />
                  Occupation: {display.occupation} <br />
                </p>
            </div>
          )
        }
    }
    export default Display;
    
    
   