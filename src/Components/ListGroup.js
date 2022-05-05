import React, { Component } from 'react'
import TeamOmegaModalPoppup from './common/TeamOmegaModalPoppup'

export class ListGroup extends Component {
    state={
        isEdited:false
    }
    toggleEditing=()=>{
        this.setState({
            isEdited: !this.state.isEdited
        })
    }

    deletecall=()=>{
        this.props.deleteListItem(this.props.index);
    }
    // saveSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.saveTodoInState(this.props.index, this.newtext.value);
    //     this.toggleEditing();
    //   };

  render() {
    const item = this.props.item;

    if (this.state.isEdited) {
        return (
          <div>
          <TeamOmegaModalPoppup saveTodoInState={this.props.saveTodoInState} item={this.props.item} index={this.props.index} toggleEditing={this.toggleEditing}/>
          <li>
        {item.text}
        <span>
          <button onClick={this.toggleEditing}>Edit</button>
          <button onClick={this.deletecall}>delete</button>
        </span>
      </li>
      </div>
        );
      }

    return (
        <li>
        {item.text}
        <span>
          <button onClick={this.toggleEditing}>Edit</button>
          <button onClick={this.deletecall}>delete</button>
        </span>
      </li>
    )
  }
}

export default ListGroup