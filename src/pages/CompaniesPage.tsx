import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  toggleSelectAll,
  toggleSelectCompany,
  addCompany,
  updateCompany,
  deleteCompanies,
} from '../redux/slices/companiesSlice';

const CompanyTable: React.FC = () => {
  const dispatch = useDispatch();
  const companies = useSelector(
    (state: RootState) => state.companiesReducer.companies
  );
  const selectedCompanyIds = useSelector(
    (state: RootState) => state.companiesReducer.selectedCompanyIds
  );

  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleSelectAll(e.target.checked));
  };

  const handleSelectCompanyChange = (id: number) => {
    dispatch(toggleSelectCompany(id));
  };

  const handleAddCompany = () => {
    const newCompany = {
      id: Date.now(),
      name: 'New Company',
      address: 'New Address',
    };
    dispatch(addCompany(newCompany));
  };

  const handleUpdateCompany = (company: {
    id: number;
    name: string;
    address: string;
  }) => {
    dispatch(updateCompany(company));
  };

  const handleDeleteCompanies = () => {
    dispatch(deleteCompanies());
  };

  return (
    <div className="table-container">
      <h1>Companies List</h1>
      <div className="btns-wrapper">
        <button onClick={handleAddCompany}>Add company</button>
        <button onClick={handleDeleteCompanies}>
          Delete selected companies
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAllChange}
                checked={selectedCompanyIds.length === companies.length}
              />
              Select all
            </th>
            <th>Company name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(
            (company: { id: number; name: string; address: string }) => (
              <tr
                key={company.id}
                style={{
                  backgroundColor: selectedCompanyIds.includes(company.id)
                    ? '#e0e0e0'
                    : 'transparent',
                }}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedCompanyIds.includes(company.id)}
                    onChange={() => handleSelectCompanyChange(company.id)}
                  />
                </td>
                <td
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleUpdateCompany({
                      ...company,
                      name: e.currentTarget.textContent || '',
                    })
                  }
                >
                  {company.name}
                </td>
                <td
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleUpdateCompany({
                      ...company,
                      address: e.currentTarget.textContent || '',
                    })
                  }
                >
                  {company.address}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
