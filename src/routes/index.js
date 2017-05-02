import React, { Component } from 'react';
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
import NoMactch from '../component/noMactch';


export default class Routes extends Component {
    render(){
        return(
            <SlideComponent>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/topics" component={Topics}/>
                    <Route path="/topics/:id" component={TopicsChild}/>
                    <Route component={NoMactch}/>
                </Switch>
            </SlideComponent>
        );
    }
}
