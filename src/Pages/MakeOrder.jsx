import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../custom.css';
import Category from '../Component/Category';
import MenuList from './../Component/MenuList';
import NewOrderList from '../Component/NewOrderList';

const MakeOrder = () => {
  const menus = [
    { id: 1, name: 'French Fries', category: 'Breakfast', image: '../../images/french-fries.jpg', quantity: 2, price: 100 },
    { id: 2, name: 'White Rice', category: 'Alle Carte', image: '../../images/white-rice.jpg', quantity: 1, price: 150 },
    { id: 3, name: 'Pilau', category: 'Main Meal', image: '../../images/pilau.jpg', quantity: 3, price: 120 },
    { id: 4, name: 'Coca Cola', category: 'Drinks', image: '../../images/soda.jpg', quantity: 12, price: 35 },
    { id: 5, name: 'Pizza BBQ', category: 'Main Meal', image: '../../images/pizza.jpg', quantity: 12, price: 1150 },
  ];

  const { id } = useParams();

  const [selectedMenus, setSelectedMenus] = useState([]);

  const handleItemClick = (menu) => {
    setSelectedMenus((prevMenus) => {
      const isMenuSelected = prevMenus.some((item) => item.id === menu.id);
      if (isMenuSelected) {
        return prevMenus.filter((item) => item.id !== menu.id);
      } else {
        return [...prevMenus, menu];
      }
    });
  };

  return (
    <div className='grid grid-cols-3 w-full'>
        <div className='col-span-2'>
            <div className='order-menu mx-2 my-2'>
              <MenuList menus={menus} onItemClick={handleItemClick} />
            </div>
            <div className='border-t'>
                <Category />
            </div>
        </div>
        <div className='border px-4 py-2'>
          <NewOrderList id={id} selectedMenus={selectedMenus} />
        </div>
    </div>
  )
}

export default MakeOrder