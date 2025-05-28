import React from 'react';
import '../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    <div className="appointment-card">
      <span className="icon">🩺</span>
      <div>
        <h5>{title}</h5>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;