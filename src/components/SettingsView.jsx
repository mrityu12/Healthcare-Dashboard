import React, { useState } from 'react';

const SettingsView = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      sms: false,
      push: true,
      appointments: true,
    },
    privacy: {
      shareData: false,
      analytics: true,
    },
    appearance: {
      darkMode: false,
      language: 'english',
    },
  });

  const handleSettingChange = (category, setting, value) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value,
      },
    }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Save Changes
        </button>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Full Name', type: 'text', defaultValue: 'John Doe', id: 'fullName' },
              { label: 'Email', type: 'email', defaultValue: 'john.doe@example.com', id: 'email' },
              { label: 'Phone', type: 'tel', defaultValue: '+1 (555) 123-4567', id: 'phone' },
              { label: 'Date of Birth', type: 'date', defaultValue: '1990-01-01', id: 'dob' },
            ].map(({ label, type, defaultValue, id }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  defaultValue={defaultValue}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Notification Settings */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 capitalize">{key} Notifications</h3>
                  <p className="text-sm text-gray-500">Receive {key} notifications for updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => handleSettingChange('notifications', key, e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300
                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full
                    after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy Settings */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Privacy & Security</h2>
          <div className="space-y-4">
            {[
              {
                key: 'shareData',
                title: 'Share Data for Research',
                desc: 'Help improve healthcare by sharing anonymized data',
              },
              {
                key: 'analytics',
                title: 'Analytics',
                desc: 'Allow usage analytics to improve the platform',
              },
            ].map(({ key, title, desc }) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">{title}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.privacy[key]}
                    onChange={(e) => handleSettingChange('privacy', key, e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300
                    after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full
                    after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Appearance Settings */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Appearance</h2>
          <div className="space-y-4">
            {/* Language Selector */}
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                id="language"
                value={settings.appearance.language}
                onChange={(e) => handleSettingChange('appearance', 'language', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </select>
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">Dark Mode</h3>
                <p className="text-sm text-gray-500">Switch to dark theme</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.appearance.darkMode}
                  onChange={(e) => handleSettingChange('appearance', 'darkMode', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300
                  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full
                  after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
              </label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsView;
