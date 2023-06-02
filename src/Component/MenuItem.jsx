import React from 'react'

const MenuItem = ({ menu }) => {
    const cardStyle = {
      backgroundImage: `url(${menu.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  
    return (
      <div className="bg-white rounded-lg shadow-md">
        <div className="w-full h-36 rounded-t-md" style={cardStyle}></div>
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