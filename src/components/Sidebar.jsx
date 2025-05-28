import React from 'react';
import { 
  BarChart3, 
  Clock, 
  Calendar, 
  User, 
  Activity, 
  MessageCircle, 
  HelpCircle, 
  Settings 
} from 'lucide-react';
import '../styles/Sidebar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'history', label: 'History', icon: Clock },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'appointments', label: 'Appointments', icon: User },
    { id: 'statistics', label: 'Statistics', icon: Activity },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'support', label: 'Support', icon: HelpCircle },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="w-64 bg-gray-50 min-h-screen p-4">
      <div className="mb-8">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">GENERAL</p>
        <div className="space-y-2">
          {menuItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">TOOLS</p>
        <div className="space-y-2">
          {menuItems.slice(5).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
