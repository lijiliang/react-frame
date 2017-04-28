import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Home extends React.Component {
    componentDidMount () {
        console.log('mount');
    }

    componentWillUnmount () {
        console.log('un mount');
    }
    render(){
        return(
            <div className="home">
                <div><h2>this is home!</h2></div>
            </div>
        );
    }
}

export default Home;
