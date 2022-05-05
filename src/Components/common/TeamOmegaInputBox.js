import React, { Component } from 'react'
import TeamOmegaButton from './TeamOmegaButton';

export class TeamOmegaInputBox extends Component {

    state={
        todotext:''
    }
    submit=(e)=>{
        e.preventDefault();
        if (this.state.todotext !== "") {
            this.props.addTodoTostate(this.state.todotext);
          }
          this.setState({
            todotext: ""
          });
    }
    changeText = (e) => {
        this.setState({
          todotext: e.target.value
        });
      };
  render() {
    return (
        <div className='main-input'>
        <form onSubmit={this.submit}>
          <input
            value={this.state.todotext}
            onChange={this.changeText}
            type="text"
            placeholder='Enter the Text'
          />
          {/* <button type="submit">Add todo</button> */}
          <TeamOmegaButton/>
        </form>
      </div>
    )
  }
}

export default TeamOmegaInputBox