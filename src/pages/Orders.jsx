import React, { useState } from 'react';
import Modal from '../components/AddOrderModal';

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dummyEntries, setDummyEntries] = useState([
    { id: 1, date: '2023-01-01', salesOrder: 'SO-001', reference: 'Ref-001', customerName: 'John Doe', status: 'Approved', amount: '$100.00', invoice: 'INV-001', payment: 'Paid' },
    { id: 2, date: '2023-01-05', salesOrder: 'SO-002', reference: 'Ref-002', customerName: 'Jane Doe', status: 'Pending', amount: '$150.00', invoice: 'INV-002', payment: 'Pending' },
  ])

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProductToTable = (newProduct) => {
    setDummyEntries((prevEntries) => [...prevEntries, newProduct]);
  };

  return (
    <div className="h-[88vh] overflow-y-scroll p-10 w-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4">
        <div>
          <h1 className="text-xl font-bold">Sales Orders</h1>
          {/* Dropdown for sales order filtering */}
          {/* You can customize the options based on your requirements */}
          <select className="mt-2 p-2 border border-gray-300 rounded">
            <option value="all">All Sales Orders</option>
            <option value="approved">Approved Orders</option>
            <option value="pending">Pending Orders</option>
          </select>
        </div>
        <div className="flex items-center">
          {/* Add New Product button linked to modal */}
          <button
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={openModal}
          >
            Add New Product
          </button>
          {/* Active search bar */}
          <input
            type="text"
            placeholder="Search for items"
            className="p-2 border border-gray-300 rounded focus:ring focus:border-blue-300"
          />
        </div>
      </div>
      
      {/* Table */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                {/* Add checkbox for selection if needed */}
              </div>
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Date
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Sales Order
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Reference
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Status
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Invoice
            </th>
            <th scope="col" className="px-6 py-3 border-b border-gray-300">
              Payment
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Render dummy entries */}
          {dummyEntries.map((entry) => (
            <tr key={entry.id}>
              <td className="p-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </td>
              <td className="px-6 py-3 border-b border-gray-300">{entry.date}</td>
              <td className="px-6 py-3 border-b border-gray-300">{entry.salesOrder}</td>
              <td className="px-6 py-3 border-b border-gray-300">{entry.reference}</td>
              <td className="px-6 py-3 border-b border-gray-300">{entry.customerName}</td>
              <td className="px-6 py-3 border-b border-gray-300">{entry.status}</td>
              <td className="px-6 py-3 border-b border-gray-300 text-center">{entry.amount}</td> {/* Center alignment for the Amount column */}
              <td className="px-6 py-3 border-b border-gray-300">{entry.invoice}</td>
              <td className="px-6 py-3 border-b border-gray-300">{entry.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for adding new product */}
      {isModalOpen && <Modal closeModal={closeModal} addProductToTable={handleAddProductToTable}/>}
    </div>
  );
};

export default Orders;
