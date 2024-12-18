import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Student } from '@/types/student';
import { fetchStudentsApi } from '@/services/api';

interface StudentState {
  students: Student[];
  selectedCohort: string;
  selectedClass: string;
  loading: boolean;
  error: string | null;
}

const initialState: StudentState = {
  students: [],
  selectedCohort: 'AY 2024-25',
  selectedClass: 'CBSE 9',
  loading: false,
  error: null,
};

export const fetchStudents = createAsyncThunk(
  'students/fetchStudents',
  async () => {
    const response = await fetchStudentsApi();
    return response;
  }
);

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setSelectedCohort: (state, action: PayloadAction<string>) => {
      state.selectedCohort = action.payload;
    },
    setSelectedClass: (state, action: PayloadAction<string>) => {
      state.selectedClass = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch students';
      });
  },
});

export const { setSelectedCohort, setSelectedClass } = studentSlice.actions;
export default studentSlice.reducer;