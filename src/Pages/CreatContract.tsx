import { ArrowLeft } from 'lucide-react';
import "../index.css";

function CreatContract() {
  return (
    <div className="p-8">
      {/* Nút Back và tiêu đề */}
      <div className="flex items-center mb-6">
        <button className="flex items-center text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
          <ArrowLeft size={20} />
          <span className="ml-2">Back</span>
        </button>
        <h1 className="text-2xl font-semibold text-left ml-4">Create Contract</h1>
      </div>

      {/* Phần thông tin khách hàng */}
      <div className="w-full mb-8">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Choose Customer</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <label className="text-gray-700 mr-4 w-32">Customer Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 bg-white text-black" />
          </div>
          <div className="flex items-center">
            <label className="text-gray-700 mr-4 w-32">Address</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 bg-white text-black" />
          </div>
          <div className="flex items-center">
            <label className="text-gray-700 mr-4 w-32">Phone Number</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 bg-white text-black" />
          </div>
        </div>
      </div>

      {/* Phần thông tin hợp đồng */}
      <div className="w-full mb-8">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Contract Information</h2>
        </div>
        <div className="flex w-full space-x-8">
          {/* Thông tin bên trái */}
          <div className="w-1/2">
            <div className="flex items-center mb-4">
              <label className="text-gray-700 mr-4 w-32">No.</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2 bg-white text-black" />
            </div>
            <div className="flex items-center mb-4">
              <label className="text-gray-700 mr-4 w-32">Price</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2 bg-white text-black" />
            </div>
            <div className="flex items-center mb-4">
              <label className="text-gray-700 mr-4 w-32">Start Date</label>
              <input type="date" className="w-full border border-gray-300 rounded-md p-2 bg-white text-black" />
            </div>
            <div className="flex items-center mb-4">
              <label className="text-gray-700 mr-4 w-32">End Date</label>
              <input type="date" className="w-full border border-gray-300 rounded-md p-2 bg-white text-black" />
            </div>
            <div className="flex items-center mb-4">
              <label className="text-gray-700 mr-4 w-32">Type</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2 bg-white text-black" />
            </div>
            <div className="flex items-center mb-4">
              <label className="text-gray-700 mr-4 w-32">Location</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2 bg-white text-black" />
            </div>
            <div className="flex items-center mb-4">
              <label className="text-gray-700 mr-4 w-32">Paid Date</label>
              <input type="date" className="w-full border border-gray-300 rounded-md p-2 bg-white text-black" />
            </div>
            <div className="flex items-center mb-4">
              <label className="text-gray-700 mr-4 w-32">Paid</label>
              <input type="checkbox" className="ml-2" />
            </div>
          </div>

          {/* Thông tin bên phải */}
          <div className="w-1/2">
            <div className="mb-4">
              <label className="text-gray-700">Contract Description</label>
              <textarea className="w-full h-64 border border-gray-300 rounded-md p-2 bg-white text-black"></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Nút Create */}
      <div className="flex justify-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Create</button>
      </div>
    </div>
  );
}

export default CreatContract;
