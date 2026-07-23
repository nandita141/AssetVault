'use client';

import { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line
} from 'recharts';
import { Activity, CircleDollarSign, Fingerprint, Layers, TrendingUp, Clock, Globe, Users, Eye, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// --- MOCK DATA ---

// Vercel-like Web Traffic Data
const webTrafficData = [
  { name: 'Jul 16', visitors: 0, pageViews: 0 },
  { name: 'Jul 17', visitors: 0, pageViews: 0 },
  { name: 'Jul 18', visitors: 0, pageViews: 0 },
  { name: 'Jul 19', visitors: 0, pageViews: 0 },
  { name: 'Jul 20', visitors: 0, pageViews: 0 },
  { name: 'Jul 21', visitors: 0, pageViews: 0 },
  { name: 'Jul 22', visitors: 2, pageViews: 22 },
  { name: 'Jul 23', visitors: 28, pageViews: 142 }, 
];

const pagesData = [
  { path: '/', visitors: 28 },
  { path: '/analytics', visitors: 15 },
  { path: '/register', visitors: 12 },
  { path: '/verify/LAND-0001', visitors: 8 },
];

const referrersData = [
  { source: 'Direct', visitors: 20 },
  { source: 'vercel.com', visitors: 5 },
  { source: 'google.com', visitors: 3 },
];

const countriesData = [
  { name: 'India', flag: '🇮🇳', percentage: '100%' }
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

  if (!mounted) return null;

  return (
    <div className="container py-8">
      {/* Background Orbs */}
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

      {/* --- WEB ANALYTICS SECTION (Vercel Clone) --- */}
      <h2 className="text-2xl font-bold text-white mb-6 font-outfit animate-fade-in stagger-2">Web Traffic Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 animate-fade-in stagger-2">
        {/* Visitors KPI */}
        <div className="card glass-panel" style={{ borderTop: '2px solid #fff' }}>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-medium text-gray-400">Visitors</h3>
            <Users size={16} className="text-gray-500" />
          </div>
          <div className="text-4xl font-bold text-white font-outfit mb-2">28</div>
          <div className="text-xs text-gray-500 flex items-center gap-1">
             Last 7 days
          </div>
        </div>

        {/* Page Views KPI */}
        <div className="card glass-panel">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-medium text-gray-400">Page Views</h3>
            <Eye size={16} className="text-gray-500" />
          </div>
          <div className="text-4xl font-bold text-white font-outfit mb-2">142</div>
          <div className="text-xs text-gray-500 flex items-center gap-1">
             Last 7 days
          </div>
        </div>

        {/* Bounce Rate KPI */}
        <div className="card glass-panel">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-medium text-gray-400">Bounce Rate</h3>
            <ArrowUpRight size={16} className="text-gray-500" />
          </div>
          <div className="text-4xl font-bold text-white font-outfit mb-2">18%</div>
          <div className="text-xs text-red-500 flex items-center gap-1 bg-red-500/10 w-max px-2 py-0.5 rounded">
             -50%
          </div>
        </div>
      </div>

      {/* Web Traffic Graph */}
      <div className="card glass-panel mb-6 animate-fade-in stagger-3">
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={webTrafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" stroke="#a1a1aa" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <YAxis stroke="#a1a1aa" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <RechartsTooltip 
                contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Line type="monotone" dataKey="visitors" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3, fill: '#3b82f6' }} activeDot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Web Traffic Tables (Pages, Referrers, Countries) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in stagger-3">
        {/* Pages Table */}
        <div className="card glass-panel p-0 overflow-hidden">
          <div className="p-4 border-b border-white/5 flex justify-between">
            <span className="text-sm font-bold text-white">Pages</span>
            <span className="text-xs text-gray-500">VISITORS</span>
          </div>
          <div className="p-2">
            {pagesData.map((page, i) => (
              <div key={i} className="flex justify-between py-2 px-2 hover:bg-white/5 rounded transition-colors text-sm">
                <span className="text-gray-300">{page.path}</span>
                <span className="text-white font-medium">{page.visitors}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Referrers Table */}
        <div className="card glass-panel p-0 overflow-hidden">
          <div className="p-4 border-b border-white/5 flex justify-between">
            <span className="text-sm font-bold text-white">Referrers</span>
            <span className="text-xs text-gray-500">VISITORS</span>
          </div>
          <div className="p-2">
            {referrersData.map((ref, i) => (
              <div key={i} className="flex justify-between py-2 px-2 hover:bg-white/5 rounded transition-colors text-sm">
                <span className="text-gray-300 flex items-center gap-2">
                  {ref.source === 'Direct' ? '' : '▲'} {ref.source}
                </span>
                <span className="text-white font-medium">{ref.visitors}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Countries Table */}
        <div className="card glass-panel p-0 overflow-hidden">
          <div className="p-4 border-b border-white/5 flex justify-between">
            <span className="text-sm font-bold text-white">Countries</span>
            <span className="text-xs text-gray-500">VISITORS</span>
          </div>
          <div className="p-2">
            {countriesData.map((country, i) => (
              <div key={i} className="flex justify-between py-2 px-2 hover:bg-white/5 rounded transition-colors text-sm">
                <span className="text-gray-300 flex items-center gap-2">
                  <span>{country.flag}</span> {country.name}
                </span>
                <span className="text-white font-medium">{country.percentage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Recent Activity Table */}
      <div className="card glass-panel animate-fade-in stagger-3" style={{ animationDelay: '0.7s' }}>
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
