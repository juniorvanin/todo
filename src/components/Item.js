import React from "react";

const Item = props => (
  <li className="To-Do">
    <input type="checkbox" name={props.name} value={props.value} />

    <label className="To-Do-Label" htmlFor="item1">
      {props.label}
    </label>
    <button onClick={() => props.handleDelete(props.id)}>Remove</button>
  </li>
);

export { Item };
