import React from "react";

interface SortingDropdownProps {
  onChange: (value: string) => void;
}

const SortingDropdown: React.FC<SortingDropdownProps> = ({ onChange }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  const handleSort = (value: string) => {
    onChange(value);
  };

  return (
    <select
      onChange={handleSortChange}
      style={{
        width: "80%",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "16px",
        backgroundColor: "#fff",
      }}
    >
      <option value="">Select Sorting Option</option>
      <option value="asc">A to Z</option>
      <option value="desc">Z to A</option>
    </select>
  );
};

export default SortingDropdown;
