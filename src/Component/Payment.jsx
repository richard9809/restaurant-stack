import React from 'react'

const Payment = () => {
  return (
    <div className='flex flex-col overflow-hidden h-full'>

        <div className='flex flex-col gap-2 py-2 border-b border-dashed'>
            <h1 className='uppercase font-semibold text-2xl'>Payable Amount</h1>
            <p className='text-3xl font-bold text-blue-500'>Kshs. 2,500</p>
        </div>

        <div className='flex justify-between py-8'>
            <button className='bg-blue-600 text-white uppercase text-xl font-normal py-4 px-14 rounded-md hover:bg-blue-600 hover:text-white'>
                <div>
                    <i class="fa fa-money-bill"></i>
                    <p>Cash</p>
                </div>
            </button>

            <button className='bg-gray-100 uppercase text-xl font-normal py-4 px-12 rounded-md hover:bg-blue-600 hover:text-white'>
                <div>
                    <i class="fa fa-credit-card"></i>
                    <p>M-PESA</p>
                </div>
            </button>
        </div>

        <div className='border-b border-dashed' style={{ height: "20rem" }}>
            <div className='cash-input bg-blue-100 py-4 px-2 rounded-sm'>
                <label className='font-normal text-2xl'> Add Cash Received</label>
                <input type="number" class="input-underline text-center text-xl font-bold bg-blue-100" />
            </div>
        </div>

        <div className='py-2'>
            <div className='grid grid-cols-2'>
                <h3 className='font-semibold uppercase text-2xl px-2'>Change</h3>
                <p className='text-3xl font-bold text-blue-500 justify-self-end'>Kshs. 0</p>
            </div>
            <div className='py-8'>
                <button className='bg-green-500 uppercase spacing text-xl font-semibold text-white py-4 px-32 rounded-md hover:bg-green-600'>
                    Pay Now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Payment