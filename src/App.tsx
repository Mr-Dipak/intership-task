import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { StudentTable } from '@/components/students/StudentTable';
import { StudentFilters } from '@/components/students/StudentFilters';

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-50 px-8 py-6">
          <StudentFilters />
          <StudentTable />
        </main>
      </div>
    </div>
  );
}

export default App;