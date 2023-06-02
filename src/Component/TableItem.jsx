import React, { useState } from 'react'

const TableItem = ({ table, onClick }) => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  return (
    <button
      className={`rounded-full outline-none focus:outline-none p-4 text-lg font-semibold ${
        isClicked ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
      }`}
      onClick={handleClick}
    >
      Table {table.number}
    </button>
  )
}

export default TableItem