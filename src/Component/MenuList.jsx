import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({ menus }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
      {menus.map((menu) => (
        <MenuItem key={menu.id} menu={menu} />
      ))}
    </div>
  )
}

export default MenuList