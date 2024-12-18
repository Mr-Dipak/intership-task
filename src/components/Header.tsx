import { Bell, HelpCircle, Search, Settings2 } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search your course"
              className="h-10 w-80 rounded-md border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="text-gray-500 hover:text-gray-700">
            <HelpCircle className="h-5 w-5" />
          </button>
          <button className="relative text-gray-500 hover:text-gray-700">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              2
            </span>
          </button>
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                alt="Adeline H. Dancy"
                className="h-full w-full object-cover"
              />
            </Avatar>
            <span className="text-sm font-medium">Adeline H. Dancy</span>
          </div>
        </div>
      </div>
    </header>
  );
}