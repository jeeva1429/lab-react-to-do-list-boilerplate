import React, { Component } from 'react'
import '../components/pronote.css'
export class Pronote extends Component {
  constructor(props){
    super(props)  
    this.state = {
        inputValue: "",
        itemsAdded : []
    }
  this.createList = this.createList.bind(this)
  this.addList = this.addList.bind(this)
  }

  createList(e) {
    this.setState({inputValue: e.target.value})
  }
  addList() {
    const newItem = this.state.inputValue;
    const itemsAdded = [...this.state.itemsAdded, newItem];
    this.setState({ itemsAdded, inputValue: "" });
  }

 
  render() {
    
    const listItems = this.state.itemsAdded.map((item, index) => (
      <div key={index} >
        {item !== "" && ( // only render if the value is not empty
          <>
            <input 
              value={item}
              onChange={(event) => {
                const newItemsAdded = [...this.state.itemsAdded];
                newItemsAdded[index] = event.target.value;
                this.setState({ itemsAdded: newItemsAdded });
              }}
            />
            <button
              onClick={(event) => {
                const newItemsAdded = [...this.state.itemsAdded];
                newItemsAdded[index] = "";
                this.setState({ itemsAdded: newItemsAdded });
              }}
            >Delete Item</button>
          </>
        )}
      </div>
    ))
       

    return (
      <div>
        <input placeholder='Type here' type='text' onChange={this.createList}></input>
        <button onClick={this.addList}>Add Item</button>
       <div>
      {this.state.inputValue}
       </div>
      {listItems}
      </div>
    )
  }
}

export default Pronote