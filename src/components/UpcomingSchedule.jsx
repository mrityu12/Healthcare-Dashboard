import React from 'react';
import { Stethoscope, Activity, Eye, Heart, Brain, CheckCircle } from 'lucide-react'; // Added CheckCircle here
import '../styles/UpcomingSchedule.css';

const UpcomingSchedule = () => {
  const currentAppointments = [
    {
      type: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr Cameron Williamson',
      icon: Stethoscope,
      color: 'bg-blue-600'
    },
    {
      type: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr Kevin Djoros',
      icon: Activity,
      color: 'bg-orange-500'
    }
  ];

  const upcomingAppointments = [
    { type: 'Health checkup complete', time: '11:00 AM', icon: CheckCircle, day: 'Thursday', color: 'text-green-600' },
    { type: 'Ophthalmologist', time: '14:00 PM', icon: Eye, day: 'Thursday', color: 'text-blue-600' },
    { type: 'Cardiologist', time: '12:00 AM', icon: Heart, day: 'Saturday', color: 'text-red-600' },
    { type: 'Neurologist', time: '16:00 PM', icon: Brain, day: 'Saturday', color: 'text-purple-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Current Appointments */}
      <div className="space-y-3">
        {currentAppointments.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className={`${item.color} text-white rounded-xl p-4 shadow-sm`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{item.type}</h3>
                  <p className="text-sm opacity-90 mb-1">{item.time}</p>
                  <p className="text-sm opacity-90">{item.doctor}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon className="w-6 h-6" />
                  {index === 0 && <span className="text-lg">🦷</span>}
                  {index === 1 && <span className="text-lg">💪</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold mb-4 text-gray-800">The Upcoming Schedule</h3>
        
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-3">On Thursday</p>
            <div className="grid grid-cols-2 gap-3">
              {upcomingAppointments.slice(0, 2).map((apt, index) => {
                const Icon = apt.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-4 h-4 ${apt.color}`} />
                      <span className="text-xs text-gray-500 font-medium">{apt.time}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">{apt.type}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div>
            <p className="text-sm text-gray-500 mb-3">On Saturday</p>
            <div className="grid grid-cols-2 gap-3">
              {upcomingAppointments.slice(2).map((apt, index) => {
                const Icon = apt.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-4 h-4 ${apt.color}`} />
                      <span className="text-xs text-gray-500 font-medium">{apt.time}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">{apt.type}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
