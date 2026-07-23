'use client';

import { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { Activity, CircleDollarSign, Fingerprint, Layers, TrendingUp, Clock, Globe } from 'lucide-react';
import Link from 'next/link';

// Mock Data for Charts
const monthlyVolumeData = [
  { name: 'Jan', volume: 15 },
  { name: 'Feb', volume: 22 },
  { name: 'Mar', volume: 45 },
  { name: 'Apr', volume: 60 },
  { name: 'May', volume: 85 },
  { name: 'Jun', volume: 142 },
];

const assetClassData = [
  { name: 'Real Estate', value: 65, color: '#8b5cf6' },
  { name: 'Precious Metals', value: 20, color: '#3b82f6' },
  { name: 'Vehicles', value: 10, color: '#10b981' },
  { name: 'Fine Art', value: 5, color: '#f59e0b' },
];

const recentActivity = [
  { id: '1', action: 'Minted RWA', asset: 'Luxury Penthouse (Mumbai)', time: '2 mins ago', hash: 'GBG7...UQYF', status: 'Success' },
  { id: '2', action: 'Transferred', asset: '24K Gold Bars (500g)', time: '15 mins ago', hash: 'GB2D...LJFH', status: 'Success' },
  { id: '3', action: 'Minted RWA', asset: 'Commercial Shop (Ahmedabad)', time: '1 hour ago', hash: 'GD24...JYNL', status: 'Success' },
  { id: '4', action: 'Verified KYC', asset: 'Alex Sharma', time: '2 hours ago', hash: 'GCA5...OIM5', status: 'Success' },
  { id: '5', action: 'Minted RWA', asset: 'Agricultural Land (Ludhiana)', time: '5 hours ago', hash: 'GCFA...DOHHV', status: 'Success' },
];

export default function AnalyticsDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch for charts

  return (
    <div className="container py-8">
      {/* Background Orbs from globals.css */}
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>

      <nav className="navbar animate-fade-in stagger-1">
        <Link href="/" className="navbar-brand text-gradient title-glow flex items-center gap-2">
          <Layers className="text-purple-500" />
          AssetVault Analytics
        </Link>
        <div className="flex gap-4">
            <span className="badge badge-success flex items-center gap-1">
              <Globe size={14} /> Soroban Testnet Operational
            </span>
            <Link href="/" className="btn btn-outline text-sm">
                Back to Home
            </Link>
        </div>
      </nav>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in stagger-2">
        <div className="card glass-panel">
          <div className="flex justify-between items-start mb-4">
            <h3 className="card-title text-gray-400">Total Assets Tokenized</h3>
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
              <Fingerprint size={20} />
            </div>
          </div>
          <div className="card-value title-glow text-white">142</div>
          <div className="text-sm text-emerald-400 flex items-center gap-1 mt-2">
            <TrendingUp size={14} /> +24% this month
          </div>
        </div>

        <div className="card glass-panel">
          <div className="flex justify-between items-start mb-4">
            <h3 className="card-title text-gray-400">Total Value Locked (TVL)</h3>
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20">
              <CircleDollarSign size={20} />
            </div>
          </div>
          <div className="card-value title-glow text-white">$24.5M</div>
          <div className="text-sm text-emerald-400 flex items-center gap-1 mt-2">
            <TrendingUp size={14} /> +12% this month
          </div>
        </div>

        <div className="card glass-panel">
          <div className="flex justify-between items-start mb-4">
            <h3 className="card-title text-gray-400">Active Wallets</h3>
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/20">
              <Activity size={20} />
            </div>
          </div>
          <div className="card-value title-glow text-white">89</div>
          <div className="text-sm text-emerald-400 flex items-center gap-1 mt-2">
            <TrendingUp size={14} /> +18% this month
          </div>
        </div>
        
        <div className="card glass-panel">
          <div className="flex justify-between items-start mb-4">
            <h3 className="card-title text-gray-400">Avg Mint Time</h3>
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 border border-amber-500/20">
              <Clock size={20} />
            </div>
          </div>
          <div className="card-value title-glow text-white">3.2s</div>
          <div className="text-sm text-emerald-400 flex items-center gap-1 mt-2">
            Soroban Network Speed
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 animate-fade-in stagger-3">
        
        {/* Tokenization Volume (Bar Chart) */}
        <div className="card glass-panel lg:col-span-2">
          <h3 className="text-lg font-bold text-white mb-6 font-outfit">Tokenization Volume (Last 6 Months)</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyVolumeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis dataKey="name" stroke="#a1a1aa" tickLine={false} axisLine={false} />
                <YAxis stroke="#a1a1aa" tickLine={false} axisLine={false} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="volume" fill="url(#colorVolume)" radius={[4, 4, 0, 0]} />
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Asset Classes (Donut Chart) */}
        <div className="card glass-panel">
          <h3 className="text-lg font-bold text-white mb-6 font-outfit">Asset Classes</h3>
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={assetClassData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {assetClassData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: '20px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="card glass-panel animate-fade-in stagger-3" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-lg font-bold text-white mb-6 font-outfit">Recent Network Activity</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                <th className="pb-3 font-medium">Action</th>
                <th className="pb-3 font-medium">Asset / Subject</th>
                <th className="pb-3 font-medium">Tx Hash</th>
                <th className="pb-3 font-medium">Time</th>
                <th className="pb-3 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {recentActivity.map((item) => (
                <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 text-white font-medium">{item.action}</td>
                  <td className="py-4 text-gray-300">{item.asset}</td>
                  <td className="py-4 text-purple-400 font-mono text-xs">{item.hash}</td>
                  <td className="py-4 text-gray-500">{item.time}</td>
                  <td className="py-4 text-right">
                    <span className="badge badge-success">{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
