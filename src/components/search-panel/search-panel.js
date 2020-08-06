import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    const placeholder = 'Type here to search';
    return (
      <input type="text"
              className="form-control search-input"
              placeholder={placeholder} />
      );
  };

  export default SearchPanel;