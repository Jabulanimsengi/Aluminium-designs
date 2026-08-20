import { Home, Hammer, Layers, Tag, Phone } from 'lucide-react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
}

export default function BottomNav({ activeTab, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'services', label: 'Services', icon: Hammer },
    { id: 'projects', label: 'Gallery', icon: Layers },
    { id: 'catalogue', label: 'Prices', icon: Tag },
    { id: 'contact', label: 'Contact', icon: Phone },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-surface border-t-2 border-outline-variant h-16 md:hidden">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full p-2 transition-all duration-150 rounded-none border-t-4 cursor-pointer ${
              isActive
                ? 'text-primary border-primary bg-surface-container-low font-bold scale-95'
                : 'text-on-surface-variant border-transparent hover:text-primary hover:bg-surface-container-low'
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-mono text-[9px] uppercase mt-1 tracking-wider">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
