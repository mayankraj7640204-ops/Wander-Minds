"use client";

import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

export function PricingView() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    fetch(`${apiUrl}/api/dashboard/stats`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch stats", err);
        setError(`Could not connect to backend API at ${apiUrl}. Is it running?`);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-slate-400">Loading analytics...</div>;
  }

  if (error || !stats) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-6 rounded-xl">
        <h3 className="font-bold mb-2">Backend Connection Error</h3>
        <p>{error || "Failed to load dashboard data."}</p>
        <p className="mt-4 text-sm opacity-80">If you are on Netlify, make sure NEXT_PUBLIC_API_URL is set in your Site Settings to your live Render URL.</p>
      </div>
    );
  }

  const lineData = {
    labels: stats.line_chart.labels,
    datasets: [
      {
        label: 'Paid Subscribers',
        data: stats.line_chart.data,
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(6, 182, 212, 0.2)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#1b1e2e',
        pointBorderColor: '#06b6d4',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        border: { display: false },
        ticks: { color: '#94a3b8' }
      },
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: '#94a3b8' }
      },
    },
  };

  const doughnutData = {
    labels: stats.doughnut_chart.labels,
    datasets: [
      {
        data: stats.doughnut_chart.data,
        backgroundColor: ['#10b981', '#06b6d4', '#f59e0b', '#ef4444'],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          color: '#94a3b8'
        },
      },
    },
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Pricing & Analytics</h1>
        <p className="text-slate-400">Track user growth, paid subscriptions, and platform ratings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#1b1e2e] border border-white/5 rounded-xl p-6">
          <div className="text-sm text-slate-400">Total Paid Users</div>
          <div className="text-3xl font-bold text-white mt-2">{stats.metrics.total_paid_users}</div>
        </div>
        <div className="bg-[#1b1e2e] border border-white/5 rounded-xl p-6">
          <div className="text-sm text-slate-400">Monthly Revenue</div>
          <div className="text-3xl font-bold text-white mt-2">{stats.metrics.monthly_revenue}</div>
        </div>
        <div className="bg-[#1b1e2e] border border-white/5 rounded-xl p-6">
          <div className="text-sm text-slate-400">Avg. Match Satisfaction</div>
          <div className="text-3xl font-bold text-emerald-500 mt-2">{stats.metrics.match_satisfaction}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1b1e2e] border border-white/5 rounded-xl p-6">
          <h3 className="text-base font-semibold text-white mb-6">Paid User Growth (Last 6 Months)</h3>
          <div className="h-[300px] w-full">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
        <div className="bg-[#1b1e2e] border border-white/5 rounded-xl p-6">
          <h3 className="text-base font-semibold text-white mb-6">User Ratings Distribution</h3>
          <div className="h-[300px] w-full">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
