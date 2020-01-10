import React, { useState } from "react";

const AddItem = ({ handleAdd }) => {
  const [value, setValue] = useState("");
  const [isDisabled, toggleDisable] = useState(true);

  return (
    <div className="Add-To-Do-Wrapper">
      <input
        className="Add-To-Do"
        placeholder="Take the garbage out"
        value={value}
        onChange={e => {
          const currentValue = e.target.value;
          setValue(currentValue);
          toggleDisable(currentValue === "");
        }}
      ></input>
      <button
        disabled={isDisabled}
        className="Add-To-Do-button"
        onClick={() => {
          handleAdd(value);
          setValue("");
          toggleDisable(true);
        }}
      >
        +
      </button>
    </div>
  );
};

export { AddItem };
