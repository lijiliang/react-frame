import React,{ Component} from 'react';

class List extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
        };
    }
    // 删除一项
    deleteHandle(id){
        this.props.deleteItem(id);
    }
    render(){
        const todos = this.props.todos;
        return(
            <ul>
                {
                    todos.map((item, index) => {
                        return(<li key={index} onClick={this.deleteHandle.bind(this, item.id)}>{item.text}</li>);
                    })
                }
            </ul>
        );
    }
}

export default List;
