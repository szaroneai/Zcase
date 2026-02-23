import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  ArrowUpRight, 
  ArrowDownRight,
  Globe,
  Smartphone
} from 'lucide-react';

// Mock Data
const salesData = [
  { name: 'Mon', revenue: 4000, orders: 24 },
  { name: 'Tue', revenue: 3000, orders: 18 },
  { name: 'Wed', revenue: 5000, orders: 32 },
  { name: 'Thu', revenue: 2780, orders: 15 },
  { name: 'Fri', revenue: 6890, orders: 45 },
  { name: 'Sat', revenue: 8390, orders: 55 },
  { name: 'Sun', revenue: 7490, orders: 48 },
];

const trafficSourceData = [
  { name: 'Direct', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Organic', value: 300 },
  { name: 'Referral', value: 200 },
];

const deviceData = [
  { name: 'Desktop', value: 65, color: '#FFD700' }, // zcase-accent
  { name: 'Mobile', value: 25, color: '#1f2937' },  // zcase-text
  { name: 'Tablet', value: 10, color: '#9ca3af' },  // gray-400
];

const COLORS = ['#FFD700', '#1f2937', '#9ca3af', '#e5e7eb'];

const StatCard: React.FC<{
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ElementType;
}> = ({ title, value, change, trend, icon: Icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-gray-50 rounded-xl text-gray-600">
        <Icon size={24} />
      </div>
      <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
        trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
      }`}>
        {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}
      </span>
    </div>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-black text-gray-900 mt-1">{value}</p>
  </div>
);

const topProductsData = [
  { name: 'ZCASE Flip - Yamaha CL5', sales: 124, revenue: 31000 },
  { name: 'Flight Case - Allen & Heath dLive', sales: 89, revenue: 16910 },
  { name: 'Custom Rack 12U', sales: 65, revenue: 5525 },
  { name: 'ZCASE Flip - DiGiCo SD12', sales: 45, revenue: 12150 },
  { name: 'Cable Trunk - Large', sales: 156, revenue: 7020 },
];

const AdminAnalytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Advanced Analytics</h1>
          <p className="text-gray-500 mt-1">Deep dive into your store's performance metrics.</p>
        </div>
        <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium outline-none focus:ring-2 focus:ring-zcase-accent">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="$34,500" change="+12.5%" trend="up" icon={DollarSign} />
        <StatCard title="Total Orders" value="1,240" change="+8.2%" trend="up" icon={ShoppingCart} />
        <StatCard title="New Customers" value="350" change="-2.4%" trend="down" icon={Users} />
        <StatCard title="Avg. Order Value" value="$245" change="+5.1%" trend="up" icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-6">Revenue & Orders Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFD700" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <CartesianGrid vertical={false} stroke="#f3f4f6" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#FFD700" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-6">Traffic Sources</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {trafficSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-3">
            {trafficSourceData.map((item, index) => (
              <div key={item.name} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span className="text-gray-600">{item.name}</span>
                </div>
                <span className="font-bold text-gray-900">{((item.value / 1200) * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Products Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
          <ShoppingCart size={20} /> Top Selling Products
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={topProductsData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={150} tick={{fontSize: 12}} />
              <Tooltip 
                cursor={{fill: '#f9fafb'}}
                contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend />
              <Bar dataKey="sales" fill="#FFD700" name="Units Sold" radius={[0, 4, 4, 0]} />
              <Bar dataKey="revenue" fill="#1f2937" name="Revenue ($)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device Usage */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Smartphone size={20} /> Device Breakdown
          </h3>
          <div className="space-y-6">
            {deviceData.map((device) => (
              <div key={device.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{device.name}</span>
                  <span className="text-sm font-bold text-gray-900">{device.value}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${device.value}%`, backgroundColor: device.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products Table (Simplified) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Globe size={20} /> Regional Sales
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs font-bold text-gray-400 uppercase border-b border-gray-100">
                  <th className="pb-3">Region</th>
                  <th className="pb-3">Sales</th>
                  <th className="pb-3 text-right">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { region: 'North America', sales: '$18,400', trend: '+15%' },
                  { region: 'Europe', sales: '$8,200', trend: '+5%' },
                  { region: 'Asia Pacific', sales: '$4,100', trend: '-2%' },
                  { region: 'South America', sales: '$2,300', trend: '+8%' },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-gray-50 transition-colors">
                    <td className="py-3 text-sm font-medium text-gray-900">{row.region}</td>
                    <td className="py-3 text-sm text-gray-600">{row.sales}</td>
                    <td className={`py-3 text-sm font-bold text-right ${row.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {row.trend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
