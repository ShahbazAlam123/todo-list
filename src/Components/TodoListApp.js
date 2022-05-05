import { Component } from 'react';
import '../App.css';
import TeamOmegaHeader from './common/TeamOmegaHeader';
import TeamOmegaInputBox from './common/TeamOmegaInputBox';
import ListGroup from './ListGroup';

class TodoListApp extends Component {
    state={
        todos:[{text:"buy milk"},{text: "buy cheese"}]
    }

        addTodoTostate = (val) => {
            const newtodo = this.state.todos.concat({
              text: val
            });
            this.setState({
              todos: newtodo
            });
          };
          deleteListItem = (index) => {
            const newtodos = this.state.todos.filter((item, i) => {
              if (index === i) {
                return false;
              }
              return true;
            });
            this.setState({
              todos: newtodos
            });
          };
          saveTodoInState = (index, newtext) => {
            const newtodo = this.state.todos.map((todo, i) => {
              if (index === i) {
                return {
                  ...todo,
                  text: newtext
                };
              }
              return todo;
            });
            this.setState({
              todos: newtodo
            });
          };
    
render(){
  return (
    <div className="App">
            <TeamOmegaHeader/>
           
           <TeamOmegaInputBox addTodoTostate={this.addTodoTostate}/>

           {this.state.todos.map((item, index) => {
          return (
            <ListGroup
              deleteListItem={this.deleteListItem}
              item={item}
              index={index}
              key={index}
              saveTodoInState={this.saveTodoInState}
            />
          );
        })}

        
    </div>
  );
}
}

export default TodoListApp;
