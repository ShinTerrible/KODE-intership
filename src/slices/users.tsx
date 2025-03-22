import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TUsersState } from '../utils/types';
import { getAllUsersApi, getDepartmentApi, getErrorCodeApi } from '../utils/api'

//state
const initialState: TUsersState = {
  data: null,
  renderingData: null,
  error: null,
  isLoading: true,
  isModalOpen: false,
  sortState: 'alphabet',
  theme: 'light'
};

// Thunks
export const getAllUsers = createAsyncThunk(
  'users/getUsers',
  getAllUsersApi
);

export const getDepartment = createAsyncThunk(
  'department/getDepartment',
  getDepartmentApi
);

export const getErrorCode = createAsyncThunk(
  'department/getDepartment',
  getErrorCodeApi
);



//Slice
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setModal: (state, { payload }) => {
      state.isModalOpen = payload
    },
    onSort: (state, { payload }: PayloadAction<string>) => {
      if (state.data !== null && payload === 'alphabet') {
        state.sortState = 'alphabet'
        state.data = state.data.sort((a, b) => {
          if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
            return -1;
          }
          if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
            return 1;
          }
          return 0
        })
      } else if (state.data !== null && payload === 'birthday') {
        state.sortState = 'birthday'
        state.data = state.data.sort((a, b) => {
          if (a.birthday < b.birthday) {
            return -1;
          }
          if (a.birthday > b.birthday) {
            return 1;
          }
          return 0;
        })
      }
    },
    onFilter: (state, { payload }: PayloadAction<string>) => {
      if (payload === '') state.renderingData = state.data
      let users = []
      if (state.data !== null) {
        for (let user of state.data) {
          let conditionals = [user.firstName.toLowerCase(), user.lastName.toLowerCase(), user.userTag.toLowerCase()]
          for (let conditional of conditionals) {
            if (conditional.startsWith(payload.toLowerCase() as string)) {
              users.push(user)
              break
            }
          }
        }
        if (users.length === 0) {
          state.renderingData = []
        }
        state.renderingData = users
      }
    },
    setTheme: (state, {payload}: PayloadAction<'light' | 'dark'>) => {
      state.theme = payload
    },
  },
  extraReducers: (builder) => {
    //get user
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, { payload }) => {
        state.error = null;
        state.data = payload.items;
        state.isLoading = false;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder
      .addCase(getDepartment.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getDepartment.fulfilled, (state, { payload }) => {
        state.error = null;
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(getDepartment.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
  selectors: {
    getUsers: (state: TUsersState) => {
      if (state.renderingData === null) return state.data
      return state.renderingData
    },
    getError: (state) => state.error,
    getIsLoading: (state) => state.isLoading,
    getIsModalOpen: (state) => state.isModalOpen,

    getSortState: (state) => state.sortState,
    getTheme: (state) => state.theme,
  },
});

export const userAction = {
  ...usersSlice.actions
};
export const { getUsers, getError, getIsLoading, getIsModalOpen, getSortState, getTheme } = usersSlice.selectors;

export default usersSlice.reducer;
export const { ...userReducer } = usersSlice.reducer;