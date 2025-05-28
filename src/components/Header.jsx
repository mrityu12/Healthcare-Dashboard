import React from 'react';
import '../styles/Header.css';
import { Search, Bell, User, Plus } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-teal-500">Healthcare.</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search patients, appointments..." 
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 w-80"
          />
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Plus className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};


export default Header;
