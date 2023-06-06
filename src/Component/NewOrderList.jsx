import React, { useEffect, useState } from 'react'
import NewOrderItem from './NewOrderItem';
import '../custom.css';

const NewOrderList = ({ id, selectedMenus }) => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderItems, setOrderItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Fuction for updating the quantity of an item in the order list
  const handleQuantityChange = (menuId, quantity) => {
    const updatedItems = orderItems.map((item) => 
        item.menuId === menuId ? { ...item, quantity } : item
    );
    setOrderItems(updatedItems);
  };

  // Function to generate a random order number
  const generateOrderNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10000000) + 10000000;
    return randomNumber.toString();
  };  

  const calculateTotal = () => {
    const sum = orderItems.reduce((total, item) => total + item.quantity * item.price, 0);
    return sum;
  };

  useEffect(() => {
    const generatedOrderNumber = generateOrderNumber();
    setOrderNumber(generatedOrderNumber);
  }, []);

    //   Function for updating the order list when a new menu is selected
  useEffect(() => {
    const updatedItems = selectedMenus.map((menu) => {
        const existingItem = orderItems.find((item) => item.menuId === menu.id);
        if (existingItem) {
            return { ...existingItem, quantity: menu.quantity };
        } else {
            return {
                menuId: menu.id,
                name: menu.name,
                quantity: 1,
                price: menu.price,
                image: menu.image,
            };
        }
    });
    setOrderItems(updatedItems);

    // Cleanup function to remove the items not present in selectedMenus
    return () => {
        setOrderItems((prevItems) => {
            const updatedItems = prevItems.filter((item) => {
                selectedMenus.some((menu) => menu.id === item.menuId)
            });
            return updatedItems;
        });
    };
  }, [selectedMenus]);

  useEffect(() => {
        const calculatedTotal = calculateTotal();
        setTotal(calculatedTotal);
    }, [orderItems]);

    const formattedTotal = total.toLocaleString(); // Format total with commas

  return (
    <div class="container">
        <div class="top-container">
            <div className='grid grid-cols-2'>
                <h2 className='text-3xl font-semibold'>ORDER #</h2>
                <p className='flex justify-end text-2xl'>{orderNumber}</p>
            </div>
            <div className='grid grid-cols-2'>
                <h2 className='text-3xl font-semibold'>TABLE #</h2>
                <p className='flex justify-end text-2xl text-gray-500'>Table {id}</p>
            </div>
        </div>

        <div class="new-order">
            {orderItems.map((orderItem) => (
                <NewOrderItem key={orderItem.menuId} item={orderItem} onQuantityChange={handleQuantityChange} />
            ))}
        </div>

        <div class="total-container">
            <div className='py-2 px-2 border-b-2 border-dashed'>
                <div className='grid grid-cols-2'>
                    <h3 className='text-3xl font-bold'>TOTAL</h3>
                    <p className='flex justify-end text-2xl font-semibold'>Ksh {formattedTotal}</p>
                </div>
            </div>

            <div className='flex justify-center gap-8 py-2'>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-lg ">
                    Cancel Order
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-lg">
                    Send Order
                </button>
            </div>
        </div>
    </div>
  )
}

export default NewOrderList