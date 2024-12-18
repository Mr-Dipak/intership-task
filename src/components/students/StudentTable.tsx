import { useEffect } from 'react';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchStudents } from '@/store/slices/studentSlice';
import { StudentTableHeader } from './StudentTableHeader';
import { StudentTableRow } from './StudentTableRow';

export function StudentTable() {
  const dispatch = useAppDispatch();
  const { students, loading, error } = useAppSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <StudentTableHeader />
          <tbody className="divide-y divide-gray-200 bg-white">
            {students.map((student) => (
              <StudentTableRow key={student.id} student={student} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}