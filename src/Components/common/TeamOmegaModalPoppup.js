import React, { Component } from 'react'

export class TeamOmegaModalPoppup extends Component {

  saveSubmit = (event) => {
    event.preventDefault();
    this.props.saveTodoInState(this.props.index, this.newtext.value);
    this.props.toggleEditing();
  };
  render() {
      const p=this.saveSubmit;
      console.log(p);
    return (
      <div>
          <div className="modalwrapper">
            <div className="modal">             
              <form onSubmit={this.saveSubmit}>              
                <input
                  className='inputBox'
                  type="text"
                  defaultValue={this.props.item.text}
                  ref={(node) => {
                    this.newtext = node;
                  }}
                />
                 <button className='updatebtn' type="submit">OK</button>
                <button className='cancelbtn' onClick={this.props.toggleEditing}>X</button>
                 
              </form>
            </div>
          </div>
      </div>
    )
  }
}

export default TeamOmegaModalPoppup