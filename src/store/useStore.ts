import { create } from 'zustand';

interface Student {
  id: string;
  name: string;
  cohort: string;
  courses: string[];
  dateJoined: string;
  lastLogin: string;
  status: 'active' | 'inactive';
}

interface StudentStore {
  students: Student[];
  selectedCohort: string;
  selectedClass: string;
  setSelectedCohort: (cohort: string) => void;
  setSelectedClass: (class_: string) => void;
  fetchStudents: () => Promise<void>;
}

export const useStore = create<StudentStore>((set) => ({
  students: [],
  selectedCohort: 'AY 2024-25',
  selectedClass: 'CBSE 9',
  setSelectedCohort: (cohort) => set({ selectedCohort: cohort }),
  setSelectedClass: (class_) => set({ selectedClass: class_ }),
  fetchStudents: async () => {
    // Simulated API call
    const mockStudents: Student[] = [
      {
        id: '1',
        name: 'Anshuman Kashyap',
        cohort: 'AY 2024-25',
        courses: ['CBSE 9 Science', 'CBSE 9 Math'],
        dateJoined: '17. Nov, 2024',
        lastLogin: '17. Nov, 2024 4:16 PM',
        status: 'active',
      },
      // Add more mock students here
    ];
    set({ students: mockStudents });
  },
}));