import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setSelectedCohort, setSelectedClass } from '@/store/slices/studentSlice';

export function StudentFilters() {
  const dispatch = useAppDispatch();
  const { selectedCohort, selectedClass } = useAppSelector((state) => state.students);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Select
          value={selectedCohort}
          onValueChange={(value) => dispatch(setSelectedCohort(value))}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select cohort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AY 2024-25">AY 2024-25</SelectItem>
            <SelectItem value="AY 2023-24">AY 2023-24</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={selectedClass}
          onValueChange={(value) => dispatch(setSelectedClass(value))}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CBSE 9">CBSE 9</SelectItem>
            <SelectItem value="CBSE 10">CBSE 10</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button>Add new Student</Button>
    </div>
  );
}