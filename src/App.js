import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import History from './components/History';
import CalendarView from './components/CalendarView';
import AppointmentsView from './components/AppointmentsView';
import StatisticsView from './components/StatisticsView';  // ✅ Corrected
import ToolsView from './components/ToolsView';            // ✅ Corrected
import ChatView from './components/ChatView';              // ✅ Corrected
import SupportView from './components/SupportView';        // ✅ Corrected
import SettingsView from './components/SettingsView';      // ✅ Corrected

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardMainContent />;
      case 'history':
        return <History />;
      case 'calendar':
        return <CalendarView />;
      case 'appointments':
        return <AppointmentsView />;
      case 'statistics':
        return <StatisticsView />;
      case 'tools':
        return <ToolsView />;
      case 'chat':
        return <ChatView />;
      case 'support':
        return <SupportView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardMainContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-4">{renderContent()}</main>
      </div>
    </div>
  );
};

export default App;
