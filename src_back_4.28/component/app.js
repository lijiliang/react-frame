import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>React Router Demo</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/topics">topics</Link></li>
                    <li><Link to="/topics/001">topics 001</Link></li>
                    <li><Link to="/topics/002">topics 002</Link></li>
                </ul>
            </div>
        );
    }
}

export default App;
