// SearchBar.tsx

import React from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={handleSearchChange}
      style={{
        width: "90%",
        padding: "10px",
        borderRadius: "25px",
        border: "1px solid #ccc",
        fontSize: "16px",
        outline: "none",
      }}
    />
  );
};

export default SearchBar;
