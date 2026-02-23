import React, { useState } from 'react';
import { 
  MessageCircle, 
  HelpCircle, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Search,
  Filter,
  MoreVertical,
  Send,
  User,
  Plus
} from 'lucide-react';
import Button from '../../components/Button';

// Mock Tickets Data
const initialTickets = [
  { id: 'TKT-2490', subject: 'Shipping Delay Inquiry', customer: 'Alice Brown', status: 'Open', priority: 'High', date: '2 hours ago', lastReply: 'Support Agent' },
  { id: 'TKT-2489', subject: 'Product Compatibility Question', customer: 'John Doe', status: 'In Progress', priority: 'Medium', date: '5 hours ago', lastReply: 'Customer' },
  { id: 'TKT-2485', subject: 'Custom Foam Insert Request', customer: 'Studio 54', status: 'Resolved', priority: 'Low', date: '1 day ago', lastReply: 'Support Agent' },
  { id: 'TKT-2480', subject: 'Return Request - Damaged Item', customer: 'Mike Johnson', status: 'Open', priority: 'Urgent', date: '2 days ago', lastReply: 'Customer' },
];

const AdminSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tickets' | 'faq'>('tickets');
  const [tickets, setTickets] = useState(initialTickets);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Support Center</h1>
          <p className="text-gray-500 mt-1">Manage customer inquiries and help documentation.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => setActiveTab('faq')} className={`${activeTab === 'faq' ? 'bg-gray-100' : ''}`}>
            Manage FAQ
          </Button>
          <Button onClick={() => setActiveTab('tickets')} className={`${activeTab === 'tickets' ? 'bg-zcase-accent' : 'bg-zinc-900 text-white'}`}>
            View Tickets
          </Button>
        </div>
      </div>

      {activeTab === 'tickets' ? (
        <>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
               <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                 <MessageCircle size={24} />
               </div>
               <div>
                 <div className="text-2xl font-black text-gray-900">12</div>
                 <div className="text-xs text-gray-500 font-bold uppercase">Open Tickets</div>
               </div>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
               <div className="p-3 bg-yellow-50 text-yellow-600 rounded-lg">
                 <Clock size={24} />
               </div>
               <div>
                 <div className="text-2xl font-black text-gray-900">4.5h</div>
                 <div className="text-xs text-gray-500 font-bold uppercase">Avg. Response</div>
               </div>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
               <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                 <CheckCircle size={24} />
               </div>
               <div>
                 <div className="text-2xl font-black text-gray-900">85%</div>
                 <div className="text-xs text-gray-500 font-bold uppercase">Resolution Rate</div>
               </div>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
               <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                 <AlertCircle size={24} />
               </div>
               <div>
                 <div className="text-2xl font-black text-gray-900">3</div>
                 <div className="text-xs text-gray-500 font-bold uppercase">Urgent Issues</div>
               </div>
             </div>
           </div>

           <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search tickets..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-zcase-accent focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <select className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 border border-gray-200 outline-none">
                <option>All Statuses</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold">
                      {ticket.customer.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-xs text-gray-500 font-bold">{ticket.id}</span>
                        <h4 className="font-bold text-gray-900 group-hover:text-zcase-accent transition-colors">{ticket.subject}</h4>
                        {ticket.priority === 'Urgent' && (
                          <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Urgent</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        <span>{ticket.customer}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>Last reply by {ticket.lastReply}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{ticket.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      ticket.status === 'Open' ? 'bg-blue-100 text-blue-700' :
                      ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {ticket.status}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* FAQ Management (Placeholder) */
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
          <HelpCircle className="mx-auto text-gray-300 mb-4" size={48} />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Knowledge Base</h3>
          <p className="text-gray-500 mb-6">Manage articles, categories, and helpful resources for your customers.</p>
          <Button className="inline-flex items-center gap-2">
            <Plus size={18} /> Add New Article
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdminSupport;
