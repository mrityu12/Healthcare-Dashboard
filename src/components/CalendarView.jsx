import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../styles/CalendarView.css';
import { healthData } from '../data/healthData';  // <-- Correct named import

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarView = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth()); // 0-based month
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  const datesRef = useRef([]);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = useMemo(() => new Date(year, month, 1).getDay(), [year, month]);

  const daysInMonth = useMemo(() => getDaysInMonth(year, month), [year, month]);

  const calendarDays = useMemo(() => {
    const daysArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(day);
    }
    return daysArray;
  }, [firstDayOfMonth, daysInMonth]);

  useEffect(() => {
    const idx = calendarDays.findIndex((d) => d === selectedDate);
    if (idx !== -1 && datesRef.current[idx]?.scrollIntoView) {
      datesRef.current[idx].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [selectedDate, calendarDays]);

  const formattedSelectedDate = new Date(year, month, selectedDate)
    .toISOString()
    .split('T')[0];

  // IMPORTANT: You do not have appointments in healthData, so let's handle that safely
  const appointmentsForDay = (healthData.appointments || []).filter(
    (apt) => apt.date === formattedSelectedDate
  );

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
      setSelectedDate(1);
    } else {
      setMonth(month - 1);
      setSelectedDate(1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
      setSelectedDate(1);
    } else {
      setMonth(month + 1);
      setSelectedDate(1);
    }
  };

  const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth} className="nav-button" aria-label="Previous Month">
          &lt;
        </button>
        <h2 className="calendar-title">
          {monthName} {year}
        </h2>
        <button onClick={handleNextMonth} className="nav-button" aria-label="Next Month">
          &gt;
        </button>
      </div>

      <div className="calendar-weekdays">
        {daysOfWeek.map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-days">
        {calendarDays.map((date, idx) =>
          date ? (
            <div
              key={idx}
              ref={(el) => (datesRef.current[idx] = el)}
              className={`calendar-day ${selectedDate === date ? 'selected-date' : ''}`}
              onClick={() => setSelectedDate(date)}
              style={{ cursor: 'pointer' }}
            >
              {date}
            </div>
          ) : (
            <div key={idx} className="calendar-day empty-day" />
          )
        )}
      </div>

      <div className="appointment-list">
        <h3>Appointments on {formattedSelectedDate}</h3>
        {appointmentsForDay.length === 0 ? (
          <p>No appointments scheduled.</p>
        ) : (
          appointmentsForDay.map((apt) => (
            <div key={apt.id} className="appointment-item">
              <p>
                <strong>{apt.patient}</strong> with {apt.doctor}
              </p>
              <p>
                {apt.time} — {apt.duration}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CalendarView;
