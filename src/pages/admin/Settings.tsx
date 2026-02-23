import React, { useState } from 'react';
import { Save, Shield, Database, Bell, Globe, Lock, Smartphone } from 'lucide-react';
import Button from '../../components/Button';

const Toggle: React.FC<{ label: string; checked: boolean; onChange: () => void }> = ({ label, checked, onChange }) => (
  <div className="flex items-center justify-between py-3">
    <span className="text-gray-700 font-medium">{label}</span>
    <button 
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-zcase-accent focus:ring-offset-2 ${
        checked ? 'bg-zcase-accent' : 'bg-gray-200'
      }`}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        checked ? 'translate-x-6' : 'translate-x-1'
      }`} />
    </button>
  </div>
);

const AdminSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    siteName: 'ZCASE USA',
    siteEmail: 'admin@zcase.com',
    maintenanceMode: false,
    twoFactorAuth: true,
    emailNotifications: true,
    autoBackup: true,
    cacheEnabled: true,
  });

  const handleChange = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-black text-gray-900">System Settings</h1>
        <p className="text-gray-500 mt-1">Configure global application preferences and security.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* General Settings */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Globe size={20} />
              </div>
              <h2 className="text-lg font-bold text-gray-900">General Configuration</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Site Name</label>
                <input 
                  type="text" 
                  value={settings.siteName}
                  className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-zcase-accent outline-none" 
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Admin Email</label>
                <input 
                  type="email" 
                  value={settings.siteEmail}
                  className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-zcase-accent outline-none" 
                  readOnly
                />
              </div>
              <div className="pt-2 border-t border-gray-100 mt-2">
                 <Toggle 
                  label="Maintenance Mode" 
                  checked={settings.maintenanceMode} 
                  onChange={() => handleChange('maintenanceMode')} 
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                <Bell size={20} />
              </div>
              <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
            </div>
            
            <div className="divide-y divide-gray-100">
              <Toggle 
                label="Email Notifications" 
                checked={settings.emailNotifications} 
                onChange={() => handleChange('emailNotifications')} 
              />
              <Toggle 
                label="Push Notifications" 
                checked={true} 
                onChange={() => {}} 
              />
              <Toggle 
                label="Weekly Reports" 
                checked={false} 
                onChange={() => {}} 
              />
            </div>
          </div>
        </div>

        {/* Security & System */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                <Shield size={20} />
              </div>
              <h2 className="text-lg font-bold text-gray-900">Security & Access</h2>
            </div>
            
            <div className="divide-y divide-gray-100">
              <Toggle 
                label="Two-Factor Authentication (2FA)" 
                checked={settings.twoFactorAuth} 
                onChange={() => handleChange('twoFactorAuth')} 
              />
              <Toggle 
                label="Force SSL/HTTPS" 
                checked={true} 
                onChange={() => {}} 
              />
              <Toggle 
                label="IP Whitelisting" 
                checked={false} 
                onChange={() => {}} 
              />
              <div className="py-4">
                <button className="text-sm text-zcase-accent font-bold hover:underline flex items-center gap-2">
                  <Lock size={14} />
                  Change Admin Password
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                <Database size={20} />
              </div>
              <h2 className="text-lg font-bold text-gray-900">System & Performance</h2>
            </div>
            
            <div className="divide-y divide-gray-100">
              <Toggle 
                label="Automatic Daily Backups" 
                checked={settings.autoBackup} 
                onChange={() => handleChange('autoBackup')} 
              />
              <Toggle 
                label="Enable System Cache" 
                checked={settings.cacheEnabled} 
                onChange={() => handleChange('cacheEnabled')} 
              />
              <div className="py-4 flex gap-3">
                 <button className="flex-1 py-2 px-3 bg-gray-100 text-gray-600 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">
                    Clear Cache
                 </button>
                 <button className="flex-1 py-2 px-3 bg-gray-100 text-gray-600 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">
                    View Logs
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end pt-4">
        <Button className="px-8 py-3 text-lg">Save Changes</Button>
      </div>
    </div>
  );
};

export default AdminSettings;
