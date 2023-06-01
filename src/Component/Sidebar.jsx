import React from 'react';
import SidebarItem from './SidebarItem';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Menu  from '../Pages/Menu';
import Payment from '../Pages/Payment';
import Orders from '../Pages/Orders';

const Sidebar = () => {
  return (
    <>
      <div className="bg-gray-200 h-90 w-20 flex flex-col justify-evenly">
        <SidebarItem icon={<i className="fa fa-home" />} name="HOME" to="/" />
        <SidebarItem icon={<i className="fa fa-book" />} name="MENU" to="/menu" />
        <SidebarItem icon={<i className="fa fa-money" />} name="PAYMENT" to="/payment" />
        <SidebarItem icon={<i className="fa fa-grip" />} name="ORDERS" to="/orders" />
        <SidebarItem icon={<i className="fa fa-cog" />} name="SETTINGS" />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
};

export default Sidebar;