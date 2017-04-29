import Home from '../component/home';
import About from '../component/about';
import Topics from '../component/topics';
import TopicsChild from '../component/topicsChild';

// 路由配置
const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/topics',
        component: Topics,
        routes: [{
            path: '/topics/:id',
            component: TopicsChild
        }]
    },
    {
        path: '/topics/:id',
        component: TopicsChild
    }
];

export default routes;
