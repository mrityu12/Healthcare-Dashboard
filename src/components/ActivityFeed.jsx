import React, { useState } from 'react';
import { Heart, Activity, Droplets, Moon, TrendingUp, TrendingDown } from 'lucide-react';
import '../styles/ActivityFeed.css';

const ActivityDashboard = () => {
  const [activeTab, setActiveTab] = useState('Week');

  const metricData = {
    Week: [
      { name: 'Heart Rate', icon: <Heart />, value: '72 bpm', change: '+1', trend: 'up' },
      { name: 'Steps', icon: <Activity />, value: '6,500', change: '-3%', trend: 'down' },
      { name: 'Sleep', icon: <Moon />, value: '80%', change: '+5%', trend: 'up' },
      { name: 'Water', icon: <Droplets />, value: '1.8 L', change: '+0.2L', trend: 'up' },
    ],
    Month: [
      { name: 'Heart Rate', icon: <Heart />, value: '75 bpm', change: '+3', trend: 'up' },
      { name: 'Steps', icon: <Activity />, value: '198,000', change: '+10%', trend: 'up' },
      { name: 'Sleep', icon: <Moon />, value: '76%', change: '-2%', trend: 'down' },
      { name: 'Water', icon: <Droplets />, value: '56.4 L', change: '+1.2L', trend: 'up' },
    ],
  };

  const getTrendIcon = (trend) =>
    trend === 'up' ? <TrendingUp className="icon" /> : <TrendingDown className="icon" />;

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="header">
        <h2><Activity className="icon" /> Activity Dashboard</h2>
        <div className="tabs">
          {['Week', 'Month'].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'tab active' : 'tab'}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Health Metrics */}
      <div className="metrics">
        {metricData[activeTab].map((m) => (
          <div className="card" key={m.name}>
            <div className="top">
              <span>{m.name}</span>
              {getTrendIcon(m.trend)}
            </div>
            <div className="value">{m.value}</div>
            <small className={m.trend === 'up' ? 'green' : 'red'}>
              {m.change} from {activeTab === 'Week' ? 'yesterday' : 'last month'}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityDashboard;
