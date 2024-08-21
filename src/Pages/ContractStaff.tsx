import { useState } from "react";
import { ChevronDown, Search, Filter, Plus, Edit } from 'lucide-react';
import {
  PriceStaffContainer, PriceStaffHeader, PriceStaffSearchContainer, 
  PriceStaffSearchInputContainer, PriceStaffSearchInput, 
  PriceStaffSearchIcon, PriceStaffFilterContainer, 
  PriceStaffFilterIcon, PriceStaffFilterText, PriceStaffTableContainer, 
  PriceStaffTable, PriceStaffTableHeader, PriceStaffTableHeaderCell, 
  PriceStaffTableBodyCell, PriceStaffCheckbox, PriceStaffActionButtons, 
  PriceStaffActionButton, PriceStaffPaginationContainer, 
  PriceStaffPaginationButton, PriceStaffPaginationShowing, PriceStaffPaginationLink
} from "../Style/tailwindStyles";
import "../index.css";

interface ContractStaffProps {
  data: Array<{
    id: string;
    customerName: string;
    startDate: string;
    endDate: string;
    requestDate: string;
    status: string;
    serviceDetails: string;
  }>;
}

function ContractStaff({ data }: ContractStaffProps) {
  const [filter, setFilter] = useState("Item 1");

  return (
    <div className={PriceStaffContainer}>
      {/* Header */}
      <h1 className={PriceStaffHeader}>Contract Management</h1>

      {/* Search and Filter */}
      <div className={PriceStaffSearchContainer}>
        <div className={PriceStaffSearchInputContainer}>
          <Search className={PriceStaffSearchIcon} />
          <input 
            type="text" 
            placeholder="Search..."
            className={PriceStaffSearchInput}
          />
        </div>
        <div className={PriceStaffFilterContainer}>
          <Filter className={PriceStaffFilterIcon} />
          <span className={PriceStaffFilterText}>Filter</span>
          <ChevronDown className={PriceStaffFilterIcon} size={24} />
        </div>
      </div>

      {/* Table */}
      <div className={PriceStaffTableContainer}>
        {data.length > 0 ? (
          <table className={PriceStaffTable}>
            <thead className={PriceStaffTableHeader}>
              <tr>
                <th className={PriceStaffTableHeaderCell}><input type="checkbox" className={PriceStaffCheckbox} /></th>
                <th className={PriceStaffTableHeaderCell}>Name Customer</th>
                <th className={PriceStaffTableHeaderCell}>Start Date</th>
                <th className={PriceStaffTableHeaderCell}>End Date</th>
                <th className={PriceStaffTableHeaderCell}>Request Date</th>
                <th className={PriceStaffTableHeaderCell}>Status</th>
                <th className={PriceStaffTableHeaderCell} style={{ width: '8rem' }}>Action</th>
                <th className={PriceStaffTableHeaderCell}>Send</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  {/* Cột Name Customer */}
                  <td className={PriceStaffTableBodyCell}><input type="checkbox" className={PriceStaffCheckbox} /></td>
                  <td className={PriceStaffTableBodyCell}>{item.customerName}</td>

                  {/* Cột Start Date */}
                  <td className={PriceStaffTableBodyCell}>{item.startDate}</td>

                  {/* Cột End Date */}
                  <td className={PriceStaffTableBodyCell}>{item.endDate}</td>

                  {/* Cột Request Date */}
                  <td className={PriceStaffTableBodyCell}>{item.requestDate}</td>

                  {/* Cột Status */}
                  <td className={PriceStaffTableBodyCell}>
                    {(() => {
                      switch (item.status) {
                        case 'pending':
                          return 'Chờ gửi yêu cầu phê duyệt';
                        case 'notApproved':
                          return 'Chưa được Manager phê duyệt';
                        case 'approved':
                          return 'Đã được phê duyệt';
                        case 'rejected':
                          return 'Bị từ chối phê duyệt';
                        default:
                          return 'Không xác định';
                      }
                    })()}
                  </td>

                  {/* Cột Action */}
                  <td className={PriceStaffTableBodyCell}>
                    <div className={PriceStaffActionButtons}>
                      <a href="#add" className={PriceStaffActionButton}><Plus /></a>
                      <a href="#edit" className={PriceStaffActionButton}><Edit /></a>
                    </div>
                  </td>

                  {/* Cột Send */}
                  <td className={PriceStaffTableBodyCell}>
                    <button 
                      className={PriceStaffActionButton} 
                      style={{ backgroundColor: "#1E90FF", color: "white", padding: "0.5rem", borderRadius: "5px" }}
                    >
                      Send
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center py-4">Không có dữ liệu</p>
        )}
      </div>

      {/* Pagination */}
      <div className={PriceStaffPaginationContainer}>
        <span className={PriceStaffPaginationShowing}>Showing: 1 of 24</span>
        <div className="flex space-x-2">
          <a href="#prev" className={PriceStaffPaginationButton}>Prev</a>
          <a href="#1" className={PriceStaffPaginationLink}>1</a>
          <a href="#2" className={PriceStaffPaginationLink}>2</a>
          <a href="#more" className={PriceStaffPaginationLink}>...</a>
          <a href="#next" className={PriceStaffPaginationButton}>Next</a>
        </div>
      </div>
    </div>
  );
}

export default ContractStaff;
