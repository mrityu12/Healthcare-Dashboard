import React, { useState } from 'react';
// If you use icon components, import them properly
// For example, if you use Heroicons (popular React icons), install and import like this:
import { UserIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

const ChatView = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Dr. Sarah Johnson', message: 'Good morning! How are you feeling today?', time: '09:30', isDoctor: true },
    { id: 2, sender: 'You', message: "Hello Doctor, I'm feeling much better. The medication is working well.", time: '09:32', isDoctor: false },
    { id: 3, sender: 'Dr. Sarah Johnson', message: "That's great to hear! Please continue with the current dosage and let me know if you experience any side effects.", time: '09:35', isDoctor: true }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: 'You',
        message: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isDoctor: false
      }]);
      setMessage('');
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Healthcare Chat</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm h-96 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <UserIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Dr. Sarah Johnson</h3>
              <p className="text-sm text-green-600">Online</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isDoctor ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.isDoctor 
                  ? 'bg-gray-100 text-gray-800' 
                  : 'bg-blue-600 text-white'
              }`}>
                <p className="text-sm">{msg.message}</p>
                <p className={`text-xs mt-1 ${msg.isDoctor ? 'text-gray-500' : 'text-blue-100'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center"
              aria-label="Send message"
            >
              <PaperAirplaneIcon className="w-5 h-5 rotate-90" />
            </button>
          </div>
        </div>
      </div>

      {/* Available Doctors */}
      <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Available Doctors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Dr. Sarah Johnson', specialty: 'Cardiology', status: 'online' },
            { name: 'Dr. Michael Brown', specialty: 'Dermatology', status: 'busy' },
            { name: 'Dr. Lisa Chen', specialty: 'Orthopedics', status: 'online' }
          ].map((doctor, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <UserIcon className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{doctor.name}</p>
                <p className="text-sm text-gray-500">{doctor.specialty}</p>
              </div>
              <div className={`w-3 h-3 rounded-full ${
                doctor.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatView;
