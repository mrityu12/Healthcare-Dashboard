import React from 'react';
import '../styles/HealthStatusCards.css';

const HealthStatusCards = () => {
  return (
    <div className="status-cards">
      <div className="card">Lungs - Last Checked: Oct 10</div>
      <div className="card">Teeth - Last Checked: Oct 5</div>
      <div className="card">Bone - Last Checked: Oct 2</div>
    </div>
  );
};

export default HealthStatusCards;