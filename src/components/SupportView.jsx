import React, { useState } from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline';

const SupportView = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const faqData = {
    general: [
      { question: 'How do I book an appointment?', answer: 'You can book an appointment by clicking the "New Appointment" button on the appointments page or calling our helpline.' },
      { question: 'What are your operating hours?', answer: 'We are open Monday to Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 2:00 PM.' },
      { question: 'How can I access my medical records?', answer: 'Your medical records are available in the History section of your dashboard. You can view and download them anytime.' }
    ],
    billing: [
      { question: 'How do I pay my bills online?', answer: 'You can pay your bills through the billing section in your account or through our secure payment portal.' },
      { question: 'What insurance plans do you accept?', answer: 'We accept most major insurance plans. Please contact our billing department for specific coverage details.' },
      { question: 'Can I get a detailed bill breakdown?', answer: 'Yes, detailed billing statements are available in your account under the billing section.' }
    ],
    technical: [
      { question: 'I forgot my password. How do I reset it?', answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your registered email.' },
      { question: 'The app is not working properly. What should I do?', answer: 'Try refreshing the page or clearing your browser cache. If the issue persists, contact our technical support.' },
      { question: 'How do I update my personal information?', answer: 'You can update your information in the Settings section of your dashboard.' }
    ]
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Support Center</h1>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <PhoneIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Phone Support</h3>
              <p className="text-sm text-gray-500">24/7 available</p>
            </div>
          </div>
          <p className="text-gray-600 mb-3">Get immediate help over the phone</p>
          <p className="font-semibold text-blue-600">+1 (555) 123-4567</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <EnvelopeIcon className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email Support</h3>
              <p className="text-sm text-gray-500">Response within 24hrs</p>
            </div>
          </div>
          <p className="text-gray-600 mb-3">Send us your questions via email</p>
          <p className="font-semibold text-green-600">support@healthcare.com</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <ChatBubbleLeftEllipsisIcon className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Live Chat</h3>
              <p className="text-sm text-gray-500">Available now</p>
            </div>
          </div>
          <p className="text-gray-600 mb-3">Chat with our support team</p>
          <button className="text-purple-600 font-semibold hover:underline">Start Chat</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Frequently Asked Questions</h2>
        </div>

        <div className="p-6">
          {/* Category Tabs */}
          <div className="flex space-x-4 mb-6">
            {Object.keys(faqData).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData[selectedCategory].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportView;
