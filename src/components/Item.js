import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (e) => {
    let location = prompt("Enter new location")
    this.props.store.editItem(e.target.value, location)
  }
  deleteItem = (e) => {
    this.props.store.deleteItem(e.target.value)
  }

  render() {
    let item = this.props.item
    return (

      <div className={item.completed ? "crossed" : null}><input type="checkbox" onClick={this.checkItem} value={item.name} />
        {item.name}, {item.location}
        <button onClick={this.editItem} value={item.name}>Edit Location</button>
        <button onClick={this.deleteItem} value={item.name}>Delete</button>
      </div>
    )
  }
}


export default Item