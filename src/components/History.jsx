// src/components/History.jsx
import React from 'react';
import { User, FileText, Calendar } from 'lucide-react';
import { healthData } from '../data/healthData';  // Correct named import

const HistoryView = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Medical History</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Record
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Patient Medical History</h2>
              <p className="text-gray-600">Complete medical record timeline</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {healthData.medicalHistory && healthData.medicalHistory.length > 0 ? (
              healthData.medicalHistory.map((record) => (
                <div key={record.id} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-gray-800">{record.type}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          record.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {record.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{record.results}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {record.date}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {record.doctor}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No medical history records found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryView;
