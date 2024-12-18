import { Student } from '@/types/student';

// Simulated API call
export const fetchStudentsApi = async (): Promise<Student[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
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
};