export function StudentTableHeader() {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
          Student Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
          Cohort
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
          Courses
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
          Date Joined
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
          Last Login
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
          Status
        </th>
      </tr>
    </thead>
  );
}