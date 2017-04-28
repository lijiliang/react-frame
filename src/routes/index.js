import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import SlideComponent from '../component/slideComponent';
import Home from '../component/home';
import About from '../component/about';
import Topics from '../component/topics';
import TopicsChild from '../component/topicsChild';


export default class Routes extends React.Component {
    render(){
        return(
            <SlideComponent>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
                <Route path="/topics/:id" component={TopicsChild}/>
            </SlideComponent>
        );
    }
}
