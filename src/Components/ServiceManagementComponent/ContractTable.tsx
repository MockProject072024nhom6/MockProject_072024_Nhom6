import React, { useState } from 'react';
import { I_props_ContractTable } from '../../Types/GuardTypes';

const ContractTable: React.FC<I_props_ContractTable> = ({ contracts }) => {
  const [searchTypeOfService, setSearchTypeOfService] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [searchStartDate, setSearchStartDate] = useState('');
  const [searchContractCode, setSearchContractCode] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredContracts = contracts.filter(contract => {
    return (
      contract.typeOfService
        .toLowerCase()
        .includes(searchTypeOfService.toLowerCase()) &&
      contract.status.toLowerCase().includes(searchStatus.toLowerCase()) &&
      contract.startDate.includes(searchStartDate) &&
      contract.contractCode
        .toLowerCase()
        .includes(searchContractCode.toLowerCase())
    );
  });

  // Get data for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContracts = filteredContracts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleNextPage = () => {
    if (indexOfLastItem < filteredContracts.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="overflow-x-auto text-black mx-20">
      {/* Search */}
      <div className="flex mb-4 m-1">
        <input
          type="text"
          placeholder="Search by Contract Code"
          className="border px-4 py-2 mx-2 rounded-lg bg-white"
          value={searchContractCode}
          onChange={e => setSearchContractCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Type of Service"
          className="border px-4 py-2 mx-2 rounded-lg bg-white"
          value={searchTypeOfService}
          onChange={e => setSearchTypeOfService(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Status"
          className="border px-4 py-2 mx-2 rounded-lg bg-white"
          value={searchStatus}
          onChange={e => setSearchStatus(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Start Date"
          className="border px-4 py-2 mx-2 rounded-lg bg-white"
          value={searchStartDate}
          onChange={e => setSearchStartDate(e.target.value)}
        />
        <button className="ml-10 bg-blue-500 text-white rounder-lg text-sm">
          Add service
        </button>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">NO.</th>
            <th className="px-4 py-2 border-b">Contract code</th>
            <th className="px-4 py-2 border-b">Type of Service</th>
            <th className="px-4 py-2 border-b">Special requirements</th>
            <th className="px-4 py-2 border-b">Price</th>
            <th className="px-4 py-2 border-b">Start Date</th>
            <th className="px-4 py-2 border-b">End Date</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">View</th>
            <th className="px-4 py-2 border-b">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {currentContracts.map((contract, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b text-center">{contract.no}</td>
              <td className="px-4 py-2 border-b">{contract.contractCode}</td>
              <td className="px-4 py-2 border-b">{contract.typeOfService}</td>
              <td className="px-4 py-2 border-b">
                {contract.specialRequirements}
              </td>
              <td className="px-4 py-2 border-b">{contract.price}</td>
              <td className="px-4 py-2 border-b">{contract.startDate}</td>
              <td className="px-4 py-2 border-b">{contract.endDate}</td>
              <td className="px-4 py-2 border-b">{contract.status}</td>
              <td className="px-4 py-2 border-b text-blue-500 cursor-pointer hover:underline">
                {contract.view}
              </td>
              <td className="px-4 py-2 border-b">{contract.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls and Summary */}
      <div className="flex justify-between mt-4 items-center">
        <button
          onClick={handlePreviousPage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Showing {indexOfFirstItem + 1} to{' '}
          {Math.min(indexOfLastItem, filteredContracts.length)} of{' '}
          {filteredContracts.length} contracts
        </span>

        <button
          onClick={handleNextPage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          disabled={indexOfLastItem >= filteredContracts.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContractTable;
