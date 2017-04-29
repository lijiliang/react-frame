import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route} from 'react-router-dom';
import routes from './routes';
import SlideComponent from './component/slideComponent';

// 把 <Route> 组件像这样包一层，然后在需要使用 <Route> 的地方使用 <RouteWithSubRoutes>
// 自路由可以加到任意路由组件上。
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // 把自路由向下传递来达到嵌套。
    <route.component {...props} routes={route.routes}/>
  )}/>
);

ReactDOM.render((
    <BrowserRouter>
        <SlideComponent>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </SlideComponent>
    </BrowserRouter>
), document.getElementById('root'));
