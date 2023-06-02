import React from 'react'
import TableList from '../Component/TableList'

const Home = () => {

  const tables = [
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
    { id: 6, number: 6 },
    { id: 7, number: 7 },
    { id: 8, number: 8 },
    { id: 9, number: 9 },
    { id: 10, number: 10 },
  ];

  const handleTableClick = (tableId) => {
    // Handle table click event
    console.log('Table clicked:', tableId);
  };

  return (
    <div className='h-90 w-screen my-4 mx-8'>
      <TableList tables={tables} onTableClick={handleTableClick} />
    </div>
  )
}

export default Home