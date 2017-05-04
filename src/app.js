import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, HashRouter} from 'react-router-dom';
import Routes from './routes';


if(__DEV__){
    console.info('[当前环境] 开发环境!');
}
if(__PROD__){
    console.info('[当前环境] 生产环境');
}


// ReactDOM.render((
//     <BrowserRouter >
//         <Routes/>
//     </BrowserRouter>
// ), document.getElementById('root'));

import { applyMiddleware, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import logger from 'redux-logger';

class Counter extends React.Component{
    render(){
        const { value, onIncreaseClick, onDecrementClick } = this.props;
        return(
            <div>
                <span>{value}</span>
                <button onClick={onDecrementClick}>-</button>
                <button onClick={onIncreaseClick}>+</button>
            </div>
        );
    }
}
// Counter.propTypes = {
//     value: PropTypes.number.isRequired,
//     onIncreaseClick: PropTypes.func.isRequired
// };

// Action
const increaseAction = {type: 'increase'};
const decrementAction = {type: 'decrement'};

// Reducer
function counter(state = {count:0}, action){
    const count = state.count;
    switch(action.type){
        case 'increase':
            return {count: count+1};
        case 'decrement':
            return {count: count === 1 ? 1 : count-1};
        default:
            return state;
    }
}

// Store
const store = createStore(
    counter,
    applyMiddleware(logger)
);

// 负责输入逻辑  将state映射到UI组件的参数（props）
function mapStateToProps(state){
    return{
        value: state.count
    };
}

// 负责输出逻辑  用户对ui组件的操作映射成ACTION
function mapDispatchToProps(dispatch){
    return{
        onIncreaseClick: () => dispatch(increaseAction),
        onDecrementClick: () => dispatch(decrementAction)
    };
}


const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


ReactDOM.render(
    <Provider  store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
