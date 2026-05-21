"use client";

import React, { useState } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { PricingView } from '@/components/dashboard/PricingView';
import { CommunityView } from '@/components/dashboard/CommunityView';
import { MemoryView } from '@/components/dashboard/MemoryView';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('pricing');

  return (
    <div className="flex min-h-screen bg-[#0f111a] text-slate-200 font-sans">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        {activeTab === 'pricing' && <PricingView />}
        {activeTab === 'community' && <CommunityView />}
        {activeTab === 'memory' && <MemoryView />}
      </main>
    </div>
  );
}
