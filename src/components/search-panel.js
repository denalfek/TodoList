import React from 'react';
const SearchPanel = () => {
    const searchText = 'Type here to search';
    const style = { fontSize: '25px' };
    return (
      <input 
        style={style}
        placeholder={searchText} />
      );
  };

  export default SearchPanel;