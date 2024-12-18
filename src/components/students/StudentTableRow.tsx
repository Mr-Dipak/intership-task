import { Check, X } from 'lucide-react';
import { Student } from '@/types/student';

interface StudentTableRowProps {
  student: Student;
}

export function StudentTableRow({ student }: StudentTableRowProps) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="whitespace-nowrap px-6 py-4">
        <div className="text-sm font-medium text-gray-900">{student.name}</div>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <div className="text-sm text-gray-500">{student.cohort}</div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {student.courses.map((course) => (
            <span
              key={course}
              className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
            >
              {course}
            </span>
          ))}
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <div className="text-sm text-gray-500">{student.dateJoined}</div>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <div className="text-sm text-gray-500">{student.lastLogin}</div>
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
            student.status === 'active'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {student.status === 'active' ? (
            <Check className="mr-1 h-3 w-3" />
          ) : (
            <X className="mr-1 h-3 w-3" />
          )}
          {student.status}
        </span>
      </td>
    </tr>
  );
}