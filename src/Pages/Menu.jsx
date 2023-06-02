import React, { useState } from 'react'
import MenuList from './../Component/MenuList';
import './../custom.css';

const Menu = () => {
  const menus = [
    { id: 1, name: 'French Fries', category: 'Breakfast', image: '../../images/french-fries.jpg', quantity: 2, price: 100 },
    { id: 2, name: 'White Rice', category: 'Alle Carte', image: '../../images/white-rice.jpg', quantity: 1, price: 150 },
    { id: 3, name: 'Pilau', category: 'Main Meal', image: '../../images/pilau.jpg', quantity: 3, price: 120 },
    { id: 4, name: 'Coca Cola', category: 'Drinks', image: '../../images/soda.jpg', quantity: 12, price: 35 },

  ];

  // // Get unique categories from the menus array
  // const categories = [...new Set(menus.map((menu) => menu.category))];

  const categories = [
    { id: 1, name: 'Breakfast' },
    { id: 2, name: 'Alle Carte' },
    { id: 3, name: 'Main Meal' },
    { id: 4, name: 'Drinks' },
    // Add more categories as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (name) => {
    setSelectedCategory(name);
    console.log('Category clicked:', name);
  };

  return (
    <div className='flex flex-col min-h-90 w-screen my-4 mx-12'>
      
      <div className='flex-grow mx-12 scrollable-container p-4 border rounded'>
        <MenuList menus={menus} />
      </div>

      <footer className='mt-4 py-2 px-6'>
        <div className='flex justify-center'>
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-md py-4 px-10 mr-4 ${selectedCategory === category.name ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default Menu