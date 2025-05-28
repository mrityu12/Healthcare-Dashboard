import React from 'react';
import '../styles/AnatomySection.css';
import anatomyImage from '../assets/image.png';

// Import PNG images (not as ReactComponent)
import lungsIcon from '../assets/icons/lungs.png';
import teethIcon from '../assets/icons/tooth.png';
import boneIcon from '../assets/icons/zeroa.png';

const AnatomySection = () => {
  const organs = [
    {
      id: 'lungs',
      name: 'Lungs',
      icon: lungsIcon,
      color: 'bg-red-500',
      date: '28 May, 2024',
      progress: 85,
    },
    {
      id: 'teeth',
      name: 'Teeth',
      icon: teethIcon,
      color: 'bg-green-500',
      date: '27 May, 2024',
      progress: 92,
    },
    {
      id: 'bone',
      name: 'Bone',
      icon: boneIcon,
      color: 'bg-orange-500',
      date: '26 May, 2024',
      progress: 78,
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm max-w-md mx-auto">
      <div className="relative mb-6">
        <div className="w-48 h-80 mx-auto rounded-full relative overflow-hidden">
          <img
            src={anatomyImage}
            alt="Human Anatomy"
            className="w-full h-full object-cover rounded-full"
          />
          <button className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
            ❤️ Healthy Heart
          </button>
        </div>

        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-600">
          📊 Healthy Log
        </button>
      </div>

      <div className="space-y-4">
        {organs.map((organ) => (
          <div
            key={organ.id}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div
              className={`w-8 h-8 ${organ.color} rounded-lg flex items-center justify-center`}
            >
              <img src={organ.icon} alt={organ.name} className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{organ.name}</h3>
              <p className="text-sm text-gray-500">{organ.date}</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-16 h-2 bg-gray-200 rounded-full">
                <div
                  className={`${organ.color} h-full rounded-full transition-all duration-300`}
                  style={{ width: `${organ.progress}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500 w-8">
                {organ.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-blue-600 text-sm hover:underline font-medium">
        View Details →
      </button>
    </div>
  );
};

export default AnatomySection;
