import React, { useState } from "react";

import { ItemList } from "./components/ItemList";
import { AddItem } from "./components/AddItem";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = text => {
    setItems([
      ...items,
      {
        id: Math.random() * (1000 - 1) + 1,
        name: items.length + 1,
        value: items.length + 1,
        label: text
      }
    ]);
  };

  const handleDelete = id => {
    setItems([...items.filter(item => item.id !== id)]);
  };

  return (
    <div className="App">
      <h1 className="App-header">
        Thursday <br />
        05-31-2018
      </h1>
      <div className="App-wrapper">
        <AddItem handleAdd={handleAdd} />
        <ItemList items={items} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
