import React from 'react'
import OrderSummary from '../Component/OrderSummary'
import Payment from '../Component/Payment'

const Checkout = () => {
  return (
    <div className='checkout-page'>
      <div className='col-span-3 h-full overflow-hidden'>
        <OrderSummary />
      </div>
      <div className='h-full overflow-hidden px-4 py-4 border-l'>
        <Payment />
      </div>
    </div>
  )
}

export default Checkout