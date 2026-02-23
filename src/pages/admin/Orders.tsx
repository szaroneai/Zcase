import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Printer, 
  Download, 
  CheckCircle, 
  Clock, 
  XCircle,
  Package,
  Truck,
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  CreditCard,
  DollarSign,
  Calendar,
  ChevronDown
} from 'lucide-react';
import Button from '../../components/Button';

// Mock Order Data
const initialOrders = [
  { 
    id: 'ORD-2024-001', 
    customer: 'John Doe', 
    email: 'john@example.com', 
    date: '2024-02-22', 
    total: 2499.00, 
    status: 'Completed', 
    items: 2, 
    paymentMethod: 'Credit Card',
    paymentStatus: 'Paid',
    shippingMethod: 'FedEx Express'
  },
  { 
    id: 'ORD-2024-002', 
    customer: 'Sarah Smith', 
    email: 'sarah@studio.com', 
    date: '2024-02-21', 
    total: 850.00, 
    status: 'Processing', 
    items: 1,
    paymentMethod: 'PayPal',
    paymentStatus: 'Paid',
    shippingMethod: 'Standard Shipping'
  },
  { 
    id: 'ORD-2024-003', 
    customer: 'Mike Johnson', 
    email: 'mike@touring.com', 
    date: '2024-02-20', 
    total: 4500.00, 
    status: 'Shipped', 
    items: 3,
    paymentMethod: 'Wire Transfer',
    paymentStatus: 'Pending',
    shippingMethod: 'Freight'
  },
  { 
    id: 'ORD-2024-004', 
    customer: 'Tech Solutions Inc', 
    email: 'contact@techsol.com', 
    date: '2024-02-19', 
    total: 12500.00, 
    status: 'Pending', 
    items: 8,
    paymentMethod: 'Credit Card',
    paymentStatus: 'Failed',
    shippingMethod: 'Freight'
  },
  { 
    id: 'ORD-2024-005', 
    customer: 'Alice Brown', 
    email: 'alice@audio.net', 
    date: '2024-02-18', 
    total: 1899.00, 
    status: 'Cancelled', 
    items: 1,
    paymentMethod: 'PayPal',
    paymentStatus: 'Refunded',
    shippingMethod: 'Standard Shipping'
  },
];

const AdminOrders: React.FC = () => {
  const [view, setView] = useState<'list' | 'details'>('list');
  const [orders, setOrders] = useState(initialOrders);
  const [currentOrder, setCurrentOrder] = useState<any>(null);
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState('All Statuses');
  const [searchTerm, setSearchTerm] = useState('');

  const handleViewDetails = (order: any) => {
    setCurrentOrder(order);
    setView('details');
  };

  const toggleSelectOrder = (id: string) => {
    if (selectedOrders.includes(id)) {
      setSelectedOrders(selectedOrders.filter(orderId => orderId !== id));
    } else {
      setSelectedOrders([...selectedOrders, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map(o => o.id));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'Processing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Shipped': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Cancelled': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-green-600 bg-green-50';
      case 'Pending': return 'text-yellow-600 bg-yellow-50';
      case 'Failed': return 'text-red-600 bg-red-50';
      case 'Refunded': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All Statuses' || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {view === 'list' ? (
        <>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-gray-900">Orders</h1>
              <p className="text-gray-500 mt-1">Track and manage customer orders and shipments.</p>
            </div>
            <div className="flex gap-3">
              {selectedOrders.length > 0 && (
                <div className="flex items-center gap-2 mr-2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-bold animate-in fade-in slide-in-from-bottom-2">
                  <span>{selectedOrders.length} selected</span>
                  <div className="h-4 w-px bg-gray-600 mx-1"></div>
                  <button className="hover:text-gray-300">Print</button>
                  <button className="hover:text-gray-300">Export</button>
                  <button className="hover:text-gray-300 text-red-300">Delete</button>
                </div>
              )}
              <Button variant="secondary" className="flex items-center gap-2">
                <Download size={18} />
                Export CSV
              </Button>
            </div>
          </div>

          {/* KPI Cards for Orders */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-xs font-bold text-gray-500 uppercase">Total Orders</div>
              <div className="text-2xl font-black text-gray-900 mt-1">1,240</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-xs font-bold text-gray-500 uppercase">Pending Processing</div>
              <div className="text-2xl font-black text-yellow-600 mt-1">12</div>
            </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-xs font-bold text-gray-500 uppercase">Ready to Ship</div>
              <div className="text-2xl font-black text-blue-600 mt-1">5</div>
            </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-xs font-bold text-gray-500 uppercase">Returns</div>
              <div className="text-2xl font-black text-red-600 mt-1">3</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by Order ID, Customer..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zcase-accent focus:border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 border border-gray-200">
                  <Filter size={18} />
                  <span>Filter</span>
                  <ChevronDown size={14} />
                </button>
                {/* Dropdown would go here */}
              </div>
              <select 
                className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 border border-gray-200 outline-none"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option>All Statuses</option>
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-bold tracking-wider">
                  <th className="px-6 py-4 w-10">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-zcase-accent focus:ring-zcase-accent"
                      checked={selectedOrders.length === orders.length && orders.length > 0}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Payment</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => handleViewDetails(order)}>
                    <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300 text-zcase-accent focus:ring-zcase-accent"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => toggleSelectOrder(order.id)}
                      />
                    </td>
                    <td className="px-6 py-4 font-mono font-bold text-gray-900">{order.id}</td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-800">{order.customer}</div>
                      <div className="text-xs text-gray-500">{order.email}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-700">{order.paymentMethod}</div>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${getPaymentStatusColor(order.paymentStatus)}`}>
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        /* Order Details View */
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setView('list')}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                  Order #{currentOrder?.id}
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(currentOrder?.status)}`}>
                    {currentOrder?.status}
                  </span>
                </h1>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <Calendar size={14} /> Placed on {currentOrder?.date} at 10:42 AM
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium shadow-sm flex items-center gap-2">
                <Printer size={18} />
                Print Invoice
              </button>
              <Button className="flex items-center gap-2">
                <CheckCircle size={18} />
                Mark as Shipped
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Order Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Items */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                  <h3 className="font-bold text-gray-900">Order Items ({currentOrder?.items})</h3>
                  <span className="text-xs font-bold text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                    Unfulfilled
                  </span>
                </div>
                <div className="p-6">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0 last:pb-0 first:pt-0">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 border border-gray-200"></div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">ZCASE Flip - Yamaha CL5</h4>
                        <p className="text-sm text-gray-500">SKU: Z-YAM-CL5</p>
                        <p className="text-xs text-gray-400 mt-1">Weight: 45kg</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">$2,499.00</div>
                        <div className="text-sm text-gray-500">Qty: 1</div>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col items-end gap-2">
                    <div className="flex justify-between w-64 text-sm text-gray-600">
                      <span>Subtotal</span>
                      <span>$2,499.00</span>
                    </div>
                    <div className="flex justify-between w-64 text-sm text-gray-600">
                      <span>Shipping ({currentOrder?.shippingMethod})</span>
                      <span>$150.00</span>
                    </div>
                    <div className="flex justify-between w-64 text-sm text-gray-600">
                      <span>Tax</span>
                      <span>$200.00</span>
                    </div>
                    <div className="flex justify-between w-64 font-black text-lg text-gray-900 mt-2 pt-2 border-t border-gray-100">
                      <span>Total</span>
                      <span>$2,849.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Timeline */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-6">Order Timeline</h3>
                <div className="relative pl-4 border-l-2 border-gray-100 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-green-500 ring-4 ring-white"></div>
                    <p className="font-bold text-gray-900">Order Placed</p>
                    <p className="text-sm text-gray-500">Feb 22, 2024 - 10:42 AM</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white"></div>
                    <p className="font-bold text-gray-900">Payment Confirmed</p>
                    <p className="text-sm text-gray-500">Feb 22, 2024 - 10:45 AM</p>
                  </div>
                  <div className="relative opacity-50">
                    <div className="absolute -left-[21px] top-0 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white"></div>
                    <p className="font-bold text-gray-900">Processing Started</p>
                    <p className="text-sm text-gray-500">Pending</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Customer Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold">
                       {currentOrder?.customer.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{currentOrder?.customer}</div>
                      <div className="text-sm text-gray-500">Customer since 2022</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail size={16} />
                    {currentOrder?.email}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone size={16} />
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-gray-900">Shipping Address</h3>
                  <button className="text-xs font-bold text-zcase-accent hover:underline">Edit</button>
                </div>
                <div className="flex gap-3 text-sm text-gray-600">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{currentOrder?.customer}</p>
                    <p>123 Touring Avenue</p>
                    <p>Suite 4B</p>
                    <p>Los Angeles, CA 90012</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
              
               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Payment Information</h3>
                <div className="flex gap-3 text-sm text-gray-600 items-center mb-3">
                  <CreditCard size={18} />
                  <span>
                    <span className="font-bold text-gray-900">{currentOrder?.paymentMethod}</span> ending in 4242
                  </span>
                </div>
                 <div className="flex gap-3 text-sm text-gray-600 items-center">
                  <DollarSign size={18} />
                  <span>
                    Payment Status: <span className={`font-bold ${
                      currentOrder?.paymentStatus === 'Paid' ? 'text-green-600' : 'text-yellow-600'
                    }`}>{currentOrder?.paymentStatus}</span>
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-4">Notes</h3>
                <textarea 
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm h-32 resize-none focus:ring-2 focus:ring-zcase-accent outline-none"
                  placeholder="Add internal note..."
                ></textarea>
                <button className="mt-2 text-sm font-bold text-zcase-accent hover:underline">Save Note</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
