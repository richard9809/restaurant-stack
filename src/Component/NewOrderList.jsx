import React from 'react'

const NewOrderList = ({ id }) => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='border-b-2 border-dashed py-2'>
            <div className='grid grid-cols-2'>
                <h2 className='text-3xl font-semibold'>ORDER #</h2>
                <p className='flex justify-end text-2xl'>12564878</p>
            </div>
            <div className='grid grid-cols-2'>
                <h2 className='text-3xl font-semibold'>TABLE #</h2>
                <p className='flex justify-end text-2xl text-gray-500'>Table {id}</p>
            </div>
        </div>

        <div className='new-order'>Order Items</div>

        <div className='flex flex-col gap-4 border-2 border-dashed rounded-md'>
            <div className='py-4 px-2 border-b-2 border-dashed'>
                <div className='grid grid-cols-2'>
                    <h3 className='text-3xl font-bold'>TOTAL</h3>
                    <p className='flex justify-end text-2xl font-semibold'>Ksh 1000</p>
                </div>
            </div>

            <div className='py-3 flex justify-center gap-8'>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg mr-4">
                    Cancel Order
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg">
                    Send Order
                </button>
            </div>
        </div>
    </div>
  )
}

export default NewOrderList