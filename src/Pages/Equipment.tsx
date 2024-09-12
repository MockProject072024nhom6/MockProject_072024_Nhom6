import { useState } from "react";
import { ChevronDown, Search, Filter, Plus, Edit, Trash } from 'lucide-react';
import "../index.css";

interface EquipmentProps {
  data: Array<{
    id: string;
    name: string;
    price: string;
    image: string;
    lastUpdated: string;
    quantity: string;
    status: string;
    description: string;
    creator: string;
  }>;
}

function Equipment({ data }: EquipmentProps) {
  const [filter, setFilter] = useState("Item 1");

  return (
    <div className="p-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-black mb-6">Equipment Management</h1>

      {/* Search and Filter */}
      <div className="flex items-center mb-6 space-x-4">
        <div className="flex items-center border border-black rounded-md p-2">
          <Search className="text-black" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-white text-black border-none outline-none"
          />
        </div>
        <div className="flex items-center border border-black rounded-md p-2 cursor-pointer">
          <Filter className="text-black" />
          <span className="ml-2 text-black">Filter</span>
          <ChevronDown className="text-black ml-2" size={24} />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {data.length > 0 ? (
          <table className="min-w-full border border-black">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-black p-2"><input type="checkbox" className="accent-black" /></th>
                <th className="border border-black p-2 text-black">ID</th>
                <th className="border border-black p-2 text-black">Name</th>
                <th className="border border-black p-2 text-black">Price</th>
                <th className="border border-black p-2 text-black">Image</th>
                <th className="border border-black p-2 text-black">Last Updated</th>
                <th className="border border-black p-2 text-black">Quantity</th>
                <th className="border border-black p-2 text-black">Status</th>
                <th className="border border-black p-2 text-black">Description</th>
                <th className="border border-black p-2 text-black">Creator</th>
                <th className="border border-black p-2 text-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-black p-2"><input type="checkbox" className="accent-black" /></td>
                  <td className="border border-black p-2 text-black">{item.id}</td>
                  <td className="border border-black p-2 text-black">{item.name}</td>
                  <td className="border border-black p-2 text-black">{item.price}</td>
                  <td className="border border-black p-2">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                  </td>
                  <td className="border border-black p-2 text-black">{item.lastUpdated}</td>
                  <td className="border border-black p-2 text-black">{item.quantity}</td>
                  <td className="border border-black p-2 text-black">
                    {(() => {
                      switch (item.status) {
                        case 'available':
                          return 'Available';
                        case 'underMaintenance':
                          return 'Under Maintenance';
                        case 'outOfStock':
                          return 'Out of Stock';
                        default:
                          return 'Unknown';
                      }
                    })()}
                  </td>
                  <td className="border border-black p-2 text-black">{item.description}</td>
                  <td className="border border-black p-2 text-black">{item.creator}</td>
                  <td className="border border-black p-2">
                    <div className="flex space-x-2">
                      <button className="p-1 text-white bg-green-600 rounded hover:bg-green-700">
                        <Plus />
                      </button>
                      <button className="p-1 text-white bg-yellow-600 rounded hover:bg-yellow-700">
                        <Edit />
                      </button>
                      <button className="p-1 text-white bg-red-600 rounded hover:bg-red-700">
                        <Trash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center py-4">No data available</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-black">Showing: 1 of 24</span>
        <div className="flex space-x-2">
          <a href="#prev" className="px-4 py-2 border border-black text-black rounded hover:bg-gray-200">Prev</a>
          <a href="#1" className="px-4 py-2 border border-black text-black rounded hover:bg-gray-200">1</a>
          <a href="#2" className="px-4 py-2 border border-black text-black rounded hover:bg-gray-200">2</a>
          <a href="#more" className="px-4 py-2 border border-black text-black rounded hover:bg-gray-200">...</a>
          <a href="#next" className="px-4 py-2 border border-black text-black rounded hover:bg-gray-200">Next</a>
        </div>
      </div>
    </div>
  );
}

export default Equipment;
