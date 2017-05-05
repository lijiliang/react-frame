import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class SlideComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wrpper">
                <div>header</div>
                <div className="main">
                    <ul>
                      <li><Link to="/">首页</Link></li>
                      <li><NavLink to="/about" activeClassName="selected">关于</NavLink></li>
                      <li><Link to="/topics">主题列表</Link></li>
                    </ul>
                </div>
                <div className="m-content">
                    {this.props.children}
                </div>
                <div>footer</div>
            </div>
        );
    }
}

export default SlideComponent;
