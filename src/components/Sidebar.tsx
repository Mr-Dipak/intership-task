import { BarChart2, BookOpen, HelpCircle, LayoutDashboard, Settings, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '#', current: true },
  { name: 'Students', icon: Users, href: '#', current: false },
  { name: 'Chapter', icon: BookOpen, href: '#', current: false },
  { name: 'Help', icon: HelpCircle, href: '#', current: false },
  { name: 'Reports', icon: BarChart2, href: '#', current: false },
  { name: 'Settings', icon: Settings, href: '#', current: false },
];

export function Sidebar() {
  return (
    <div className="flex h-full w-60 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <span className="text-xl font-bold">Quyl.</span>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              'group flex items-center rounded-md px-3 py-2 text-sm font-medium',
              item.current
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            )}
          >
            <item.icon
              className={cn(
                'mr-3 h-5 w-5 flex-shrink-0',
                item.current ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-900'
              )}
            />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}