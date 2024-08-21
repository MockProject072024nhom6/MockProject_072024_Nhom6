import { useState } from "react";
import { ChevronDown, Search, Filter, Plus, Edit, Trash } from 'lucide-react';
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

interface PriceStaffProps {
  data: Array<{
    id: string;
    name: string;
    price: string;
    holidayPrice: string;
    term: string;
    serviceDetails: string;
  }>;
}

function PriceStaff({ data }: PriceStaffProps) {
  const [filter, setFilter] = useState("Item 1");

  return (
    <div className={PriceStaffContainer}>
      {/* Header */}
      <h1 className={PriceStaffHeader}>Price</h1>

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
                <th className={PriceStaffTableHeaderCell}>Name</th>
                <th className={PriceStaffTableHeaderCell}>ID</th>
                <th className={PriceStaffTableHeaderCell}>Price</th>
                <th className={PriceStaffTableHeaderCell}>Holiday Price</th>
                <th className={PriceStaffTableHeaderCell}>Term</th>
                <th className={PriceStaffTableHeaderCell}>Service Details</th>
                <th className={PriceStaffTableHeaderCell} style={{ width: '8rem' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className={PriceStaffTableBodyCell}><input type="checkbox" className={PriceStaffCheckbox} /></td>
                  <td className={PriceStaffTableBodyCell}>{item.name}</td>
                  <td className={PriceStaffTableBodyCell}>{item.id}</td>
                  <td className={PriceStaffTableBodyCell}>{item.price}</td>
                  <td className={PriceStaffTableBodyCell}>{item.holidayPrice}</td>
                  <td className={PriceStaffTableBodyCell}>{item.term}</td>
                  <td className={PriceStaffTableBodyCell}>{item.serviceDetails}</td>
                  <td className={PriceStaffTableBodyCell}>
                    <div className={PriceStaffActionButtons}>
                      <a href="#add" className={PriceStaffActionButton}><Plus /></a>
                      <a href="#edit" className={PriceStaffActionButton}><Edit /></a>
                      <a href="#delete" className={PriceStaffActionButton}><Trash /></a>
                    </div>
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

export default PriceStaff;
