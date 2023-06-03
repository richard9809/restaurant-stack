import React, { useState } from 'react';

const MenuItem = ({ menu, onItemClick }) => {
    const [isSelected, setIsSelected] = useState(false);

    const cardStyle = {
      backgroundImage: `url(${menu.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      outline: isSelected ? '3px solid #3B82F6' : 'none',
    };

    const handleItemClick = () => {
      setIsSelected(!isSelected);
      onItemClick(menu);
    };
  
    return (

      <div className="bg-white rounded-lg shadow-md" onClick={handleItemClick} style={cardStyle}>
        <div className="w-full h-36 rounded-t-md"></div>
        <div className="bg-gray-100 p-2">
          <h3 className="text-xl font-semibold mb-2">{menu.name}</h3>
          <p className="text-gray-600 mb-2">
            Qty: {menu.quantity} | Price: KES {menu.price}
          </p>
        </div>
      </div>
    );
  };

export default MenuItem