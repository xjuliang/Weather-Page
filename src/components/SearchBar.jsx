import React, { useState } from "react";
import SearchBarStyles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
  const [value, setNewValue] = useState("");

  const onSubmit=(e) => {
    e.preventDefault();
    onSearch(value);
  }

  return (
    <div className={SearchBarStyles.bar} 
    >
      <input
        onChange={e => setNewValue(e.target.value)}
        className={SearchBarStyles.input}
        type="text"
        placeholder="City name..."
      />
      <button
        className={SearchBarStyles.btn}
        onClick={onSubmit}
      >Add</button>
    </div>
  );
}
