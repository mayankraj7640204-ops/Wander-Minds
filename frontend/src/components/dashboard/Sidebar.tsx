import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BarChart3, Users, Image as ImageIcon, ArrowLeft } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: BarChart3 },
    { id: 'community', label: 'Community Matches', icon: Users },
    { id: 'memory', label: 'Memory Capsule', icon: ImageIcon },
  ];

  return (
    <div className="w-64 bg-[#141724] border-r border-white/5 flex flex-col p-6">
      <div className="flex items-center gap-3 text-xl font-bold text-white mb-10 px-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500">
          <path d="M12 2L2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
        Wander<span className="text-cyan-500">Mind</span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-500" 
                  : "text-slate-400 hover:text-white hover:bg-white/5 border-l-4 border-transparent"
              )}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto">
        <Link 
          href="/" 
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Main Site
        </Link>
      </div>
    </div>
  );
}
