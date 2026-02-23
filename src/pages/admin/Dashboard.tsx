import React from 'react';
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Eye, 
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from 'lucide-react';

const StatCard: React.FC<{
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ElementType;
  color: string;
}> = ({ title, value, change, trend, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
        <Icon size={24} className={color.replace('bg-', 'text-')} />
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <MoreHorizontal size={20} />
      </button>
    </div>
    <div className="space-y-1">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-black text-gray-800">{value}</span>
        <span className={`text-xs font-bold flex items-center gap-0.5 ${
          trend === 'up' ? 'text-green-500' : 'text-red-500'
        }`}>
          {trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {change}
        </span>
      </div>
    </div>
  </div>
);

const ActivityItem: React.FC<{
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}> = ({ user, action, target, time, avatar }) => (
  <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
    <img src={avatar} alt={user} className="w-10 h-10 rounded-full object-cover bg-gray-200" />
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-900">
        {user} <span className="text-gray-500 font-normal">{action}</span> <span className="font-bold">{target}</span>
      </p>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  </div>
);

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back, Administrator. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="$124,592" 
          change="+12.5%" 
          trend="up" 
          icon={DollarSign} 
          color="bg-green-500 text-green-600"
        />
        <StatCard 
          title="Active Orders" 
          value="45" 
          change="+4.2%" 
          trend="up" 
          icon={ShoppingCart} 
          color="bg-blue-500 text-blue-600"
        />
        <StatCard 
          title="New Customers" 
          value="1,204" 
          change="-2.1%" 
          trend="down" 
          icon={Users} 
          color="bg-purple-500 text-purple-600"
        />
        <StatCard 
          title="Page Views" 
          value="89.4k" 
          change="+24.8%" 
          trend="up" 
          icon={Eye} 
          color="bg-zcase-accent text-yellow-600"
        />
      </div>

      {/* Charts & Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Revenue Analytics</h2>
            <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg p-2 focus:ring-2 focus:ring-zcase-accent focus:border-transparent outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last Year</option>
            </select>
          </div>
          
          {/* Mock Chart Visualization */}
          <div className="h-64 flex items-end justify-between gap-2 px-4 pb-4 border-b border-gray-100">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 95].map((h, i) => (
              <div key={i} className="w-full bg-gray-100 rounded-t-lg relative group overflow-hidden">
                <div 
                  className="absolute bottom-0 left-0 w-full bg-zcase-accent transition-all duration-1000 group-hover:bg-yellow-400"
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-4 px-2">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
            <button className="text-zcase-accent hover:underline text-sm font-medium">View All</button>
          </div>
          
          <div className="space-y-2">
            <ActivityItem 
              user="John Doe" 
              action="placed a new order" 
              target="#ORD-2024-001" 
              time="2 minutes ago" 
              avatar="https://ui-avatars.com/api/?name=John+Doe&background=random"
            />
            <ActivityItem 
              user="Sarah Smith" 
              action="updated article" 
              target="New FLIP Case Launch" 
              time="1 hour ago" 
              avatar="https://ui-avatars.com/api/?name=Sarah+Smith&background=random"
            />
            <ActivityItem 
              user="Mike Johnson" 
              action="registered as new user" 
              target="" 
              time="3 hours ago" 
              avatar="https://ui-avatars.com/api/?name=Mike+Johnson&background=random"
            />
            <ActivityItem 
              user="System" 
              action="completed backup" 
              target="Database v2.4" 
              time="5 hours ago" 
              avatar="https://ui-avatars.com/api/?name=System&background=000&color=fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
