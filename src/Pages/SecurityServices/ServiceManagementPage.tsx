import React from "react"
import ContractTable from "../../Components/ServiceManagementComponent/ContractTable"

const ServiceManagementPage: React.FC = () => {
  const contractData = [
    {
      no: 1,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 2,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 3,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 4,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 5,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 6,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 7,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 8,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 9,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 10,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 11,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 12,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 13,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 14,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 15,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 16,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    },
    {
      no: 17,
      contractCode: "C1234",
      typeOfService: "Web Development",
      specialRequirements: "Responsive design",
      price: "$5000",
      startDate: "2023-01-01",
      endDate: "2024-09-01",
      status: "Completed",
      view: "View Details",
      feedback: "Positive"
    }
    // Add data
  ]
  return (
    <div className='p-4'>
      <h1 className='text-2xl mb-4'>Contract List</h1>
      <ContractTable contracts={contractData} />
    </div>
  )
}

export default ServiceManagementPage
