import React from 'react';
import ContractTable from '../../Components/ServiceManagementComponent/ContractTable';

const ServiceManagementPage: React.FC = () => {
  const contractData = [
    {
      no: 1,
      contractCode: 'C1234',
      typeOfService: 'Web Development',
      specialRequirements: 'Responsive design',
      price: '$5000',
      startDate: '2023-01-01',
      endDate: '2023-06-01',
      status: 'Completed',
      view: 'View Details',
      feedback: 'Positive',
    },
    {
      no: 1,
      contractCode: 'C1234',
      typeOfService: 'Web Development',
      specialRequirements: 'Responsive design',
      price: '$5000',
      startDate: '2023-01-01',
      endDate: '2023-06-01',
      status: 'Completed',
      view: 'View Details',
      feedback: 'Positive',
    },
    {
      no: 1,
      contractCode: 'C1234',
      typeOfService: 'Web Development',
      specialRequirements: 'Responsive design',
      price: '$5000',
      startDate: '2023-01-01',
      endDate: '2023-06-01',
      status: 'Completed',
      view: 'View Details',
      feedback: 'Positive',
    },
    {
      no: 1,
      contractCode: 'C1234',
      typeOfService: 'Web Development',
      specialRequirements: 'Responsive design',
      price: '$5000',
      startDate: '2023-01-01',
      endDate: '2023-06-01',
      status: 'Completed',
      view: 'View Details',
      feedback: 'Positive',
    },
    {
      no: 1,
      contractCode: 'C1234',
      typeOfService: 'Web Development',
      specialRequirements: 'Responsive design',
      price: '$5000',
      startDate: '2023-01-01',
      endDate: '2023-06-01',
      status: 'Completed',
      view: 'View Details',
      feedback: 'Positive',
    },
    {
      no: 1,
      contractCode: 'C1234',
      typeOfService: 'Web Development',
      specialRequirements: 'Responsive design',
      price: '$5000',
      startDate: '2023-01-01',
      endDate: '2023-06-01',
      status: 'Completed',
      view: 'View Details',
      feedback: 'Positive',
    },
    {
      no: 1,
      contractCode: 'C1234',
      typeOfService: 'Web Development',
      specialRequirements: 'Responsive design',
      price: '$5000',
      startDate: '2023-01-01',
      endDate: '2023-06-01',
      status: 'Completed',
      view: 'View Details',
      feedback: 'Positive',
    },
    {
      no: 1,
      contractCode: 'C1234',
      typeOfService: 'Web Development',
      specialRequirements: 'Responsive design',
      price: '$5000',
      startDate: '2023-01-01',
      endDate: '2023-06-01',
      status: 'Completed',
      view: 'View Details',
      feedback: 'Positive',
    },
    {
      no: 1,
      contractCode: 'C1234',
      typeOfService: 'Web Development',
      specialRequirements: 'Responsive design',
      price: '$5000',
      startDate: '2023-01-01',
      endDate: '2023-06-01',
      status: 'Completed',
      view: 'View Details',
      feedback: 'Positive',
    },
    // Add data
  ];
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Contract List</h1>
      <ContractTable contracts={contractData} />
    </div>
  );
};

export default ServiceManagementPage;
