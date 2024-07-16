import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dummyData } from '../../utils/dummyData';

interface Company {
  id: number;
  name: string;
  address: string;
}

interface CompaniesState {
  companies: Company[];
  selectedCompanyIds: number[];
}

const initialState: CompaniesState = {
  companies: dummyData,
  selectedCompanyIds: [],
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    toggleSelectAll: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.selectedCompanyIds = state.companies.map((company) => company.id);
      } else {
        state.selectedCompanyIds = [];
      }
    },
    toggleSelectCompany: (state, action: PayloadAction<number>) => {
      const index = state.selectedCompanyIds.indexOf(action.payload);
      if (index >= 0) {
        state.selectedCompanyIds.splice(index, 1);
      } else {
        state.selectedCompanyIds.push(action.payload);
      }
    },
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies.push(action.payload);
    },
    updateCompany: (state, action: PayloadAction<Company>) => {
      const index = state.companies.findIndex(
        (company) => company.id === action.payload.id
      );
      if (index >= 0) {
        state.companies[index] = action.payload;
      }
    },
    deleteCompanies: (state) => {
      state.companies = state.companies.filter(
        (company) => !state.selectedCompanyIds.includes(company.id)
      );
      state.selectedCompanyIds = [];
    },
  },
});

export const {
  toggleSelectAll,
  toggleSelectCompany,
  addCompany,
  updateCompany,
  deleteCompanies,
} = companiesSlice.actions;
export default companiesSlice.reducer;
