import React from 'react';
import { 
  Puzzle, 
  CheckCircle, 
  ExternalLink, 
  RefreshCw, 
  Key, 
  ShieldCheck 
} from 'lucide-react';
import Button from '../../components/Button';

const AdminIntegrations: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900">Integrations</h1>
          <p className="text-gray-500 mt-1">Connect your store with third-party tools and services.</p>
        </div>
        <Button className="flex items-center gap-2">
          <RefreshCw size={18} />
          Sync All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Payment Gateways */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
              <CheckCircle size={12} /> Connected
            </span>
          </div>
          <div className="w-12 h-12 bg-blue-600 rounded-xl mb-4 flex items-center justify-center text-white font-bold text-xl">S</div>
          <h3 className="font-bold text-gray-900 text-lg">Stripe</h3>
          <p className="text-gray-500 text-sm mt-1 mb-6">Process credit card payments securely.</p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-50">
            <button className="text-sm font-bold text-gray-600 hover:text-gray-900 flex items-center gap-1">
              <Key size={14} /> Configure Keys
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <ExternalLink size={18} />
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="flex items-center gap-1 text-gray-400 text-xs font-bold bg-gray-100 px-2 py-1 rounded-full">
              Inactive
            </span>
          </div>
          <div className="w-12 h-12 bg-[#003087] rounded-xl mb-4 flex items-center justify-center text-white font-bold text-xl">P</div>
          <h3 className="font-bold text-gray-900 text-lg">PayPal</h3>
          <p className="text-gray-500 text-sm mt-1 mb-6">Accept PayPal payments and subscriptions.</p>
          <div className="pt-4 border-t border-gray-50">
            <Button variant="secondary" className="w-full py-2 text-sm">Connect</Button>
          </div>
        </div>

        {/* Shipping */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4">
            <span className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
              <CheckCircle size={12} /> Connected
            </span>
          </div>
          <div className="w-12 h-12 bg-orange-500 rounded-xl mb-4 flex items-center justify-center text-white font-bold text-xl">F</div>
          <h3 className="font-bold text-gray-900 text-lg">FedEx API</h3>
          <p className="text-gray-500 text-sm mt-1 mb-6">Real-time shipping rates and label generation.</p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-50">
            <button className="text-sm font-bold text-gray-600 hover:text-gray-900 flex items-center gap-1">
              <ShieldCheck size={14} /> Test Mode
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <ExternalLink size={18} />
            </button>
          </div>
        </div>

        {/* Analytics */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
              <CheckCircle size={12} /> Connected
            </span>
          </div>
          <div className="w-12 h-12 bg-yellow-500 rounded-xl mb-4 flex items-center justify-center text-white font-bold text-xl">G</div>
          <h3 className="font-bold text-gray-900 text-lg">Google Analytics 4</h3>
          <p className="text-gray-500 text-sm mt-1 mb-6">Track visitor behavior and conversion.</p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-50">
            <button className="text-sm font-bold text-gray-600 hover:text-gray-900">
              View Dashboard
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <ExternalLink size={18} />
            </button>
          </div>
        </div>

        {/* Marketing */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4">
            <span className="flex items-center gap-1 text-gray-400 text-xs font-bold bg-gray-100 px-2 py-1 rounded-full">
              Inactive
            </span>
          </div>
          <div className="w-12 h-12 bg-green-600 rounded-xl mb-4 flex items-center justify-center text-white font-bold text-xl">M</div>
          <h3 className="font-bold text-gray-900 text-lg">Mailchimp</h3>
          <p className="text-gray-500 text-sm mt-1 mb-6">Email marketing automation and lists.</p>
          <div className="pt-4 border-t border-gray-50">
            <Button variant="secondary" className="w-full py-2 text-sm">Connect</Button>
          </div>
        </div>

        {/* Custom */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200 border-dashed flex flex-col items-center justify-center text-center h-full min-h-[240px]">
          <Puzzle className="text-gray-300 mb-4" size={48} />
          <h3 className="font-bold text-gray-900 text-lg">Custom Integration</h3>
          <p className="text-gray-500 text-sm mt-1 mb-6">Build your own connection using our API.</p>
          <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-white">
            View API Docs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminIntegrations;
