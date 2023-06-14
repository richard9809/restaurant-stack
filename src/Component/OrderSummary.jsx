import React from 'react'
import OrderSummaryItems from './OrderSummaryItems';

const OrderSummary = () => {
  return (
    <div className='flex flex-col px-4 h-full overflow-hidden'>

      <div className='flex justify-between border-b py-4'>

        <div className='flex justify-items-center gap-4'>
          <div>
            <h3 className='font-semibold text-2xl uppercase'>Order #: </h3>
          </div>
          <div>
            <p className='font-semibold text-2xl'>234567890</p>
          </div>
        </div>

        <div className='flex justify-items-center gap-4'>
          <h3 className='font-semibold text-2xl uppercase'>Time: </h3>
          <p className='font-semibold text-2xl text-blue-400'>10:30 AM</p>
        </div>

        <div className='flex justify-items-center gap-4'>
          <h3 className='font-semibold text-2xl uppercase'>Table #: </h3>
          <p className='font-semibold opacity-20 text-2xl'>Table 7</p>
        </div>
      </div>

      <div className='flex justify-center py-4 height-50'>
        <OrderSummaryItems />
      </div>

      <div className='text-center py-1'>
        <button className='bg-red-500 uppercase spacing text-xl font-semibold text-white py-4 px-48 rounded-md hover:bg-red-600'>
          Cancel Order
        </button>
      </div>
    </div>
  )
}

export default OrderSummary