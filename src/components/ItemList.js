import React from "react";
import { Item } from "./Item";

class ItemList extends React.Component {
  render() {
    return (
      <>
        <p>You have {this.props.items.length} peding item</p>
        <ul className="To-Do-List">
          {this.props.items.map(item => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              value={item.value}
              label={item.label}
              handleDelete={this.props.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export { ItemList };
