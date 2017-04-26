import React from 'react';
import { Link } from 'react-router';

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>React Router Demo</h1>
                <p>
                    by <a href="http://stylechen.com/" target="_blank">stylechen.com</a>
                </p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/concat">concat</Link></li>
                    <li><Link to="/list/001">list 001</Link></li>
                    <li><Link to="/list/002">list 002</Link></li>
                </ul>
            </div>
        );
    }
}

export default App;
