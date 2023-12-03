import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center mt-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded-lg "
      />
      <button onClick={handleSearch} className="ml-2 bg-red-500 text-white p-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
