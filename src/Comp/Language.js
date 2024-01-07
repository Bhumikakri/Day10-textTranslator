import React from "react";

const LanguageSelect = ({ value, onChange, options }) => (
  <select value={value} onChange={onChange}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default LanguageSelect;
