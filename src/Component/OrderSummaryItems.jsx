'use client';
import React from 'react';
import { Table } from 'flowbite-react';

const OrderSummaryItems = () => {
  return (
    <div style={{ width: "50rem" }}>
        <Table hoverable className='mb-2'>
            <Table.Head>
                <Table.HeadCell>
                    Item
                </Table.HeadCell>
                <Table.HeadCell>
                    Price
                </Table.HeadCell>
                <Table.HeadCell>
                    Qty
                </Table.HeadCell>
                <Table.HeadCell>
                    Subtotal
                </Table.HeadCell>
                <Table.HeadCell>
                <span className="sr-only">
                    Delete
                </span>
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className='divide-y'>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap uppercase font-medium text-lg text-gray-900 dark:text-white">
                        Chicken Wings
                    </Table.Cell>
                    <Table.Cell className='text-lg'>
                        Kshs. 2,000
                    </Table.Cell>
                    <Table.Cell className='text-lg'>
                        1
                    </Table.Cell>
                    <Table.Cell className='text-lg'>
                        Kshs. 2,000
                    </Table.Cell>
                    <Table.Cell>
                        <a
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        href="/tables"
                        >
                            <p className='flex gap-2 justify-items-center underline'>
                                <div>
                                    <i class="fa fa-trash"></i>
                                </div>
                            </p>
                        </a>
                    </Table.Cell>
                </Table.Row>

                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap uppercase font-medium text-lg text-gray-900 dark:text-white">
                        Summer Salad
                    </Table.Cell>
                    <Table.Cell className='text-lg'>
                        Kshs. 500
                    </Table.Cell>
                    <Table.Cell className='text-lg'>
                        1
                    </Table.Cell>
                    <Table.Cell className='text-lg'>
                        Kshs. 500
                    </Table.Cell>
                    <Table.Cell>
                        <a
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        href="/tables"
                        >
                            <p className='flex gap-2 justify-items-center underline'>
                                <div>
                                    <i class="fa fa-trash"></i>
                                </div>
                            </p>
                        </a>
                    </Table.Cell>
                </Table.Row>
                
            </Table.Body>
        </Table>
    </div>
  )
}

export default OrderSummaryItems