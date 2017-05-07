import React,{ Component } from 'react';

class Input extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            value: ''
        };
    }
    render(){
        return(
            <input
                type="text"
                value={this.state.value}
                onChange={this.changeHandle.bind(this)}
                onKeyUp={this.keyUpHandle.bind(this)}
            />
        );
    }
    changeHandle(e){
        // 实时同步数据
        this.setState({
            value: e.target.value
        });
    }
    keyUpHandle(e){
        const value = this.state.value;
        if(e.keyCode === 13 && value.trim()){
            // 提交并清空数据
            this.props.submitFn(value);
            this.setState({value: ''});
        }
    }
}

export default Input;
