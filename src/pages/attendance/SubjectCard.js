import React from 'react';
import './SubjectCard.css'; // Import your CSS file for styling

const SubjectCard = ({ subject }) => {
  const calculatePercentage = () => {
    return ((subject.attended / subject.total) * 100).toFixed(2);
  };

  const getAttendanceLevel = () => {
    const percentage = calculatePercentage();
    if (percentage >= 75) {
      return "high";
    } else if (percentage >= 50) {
      return "medium";
    } else {
      return "low";
    }
  };

  const renderAlert = () => {
    const percentage = calculatePercentage();
    if (percentage < 75) {
      const classesNeeded = Math.ceil((0.75 * subject.total - subject.attended) / (1 - 0.75));
      return (
        <div className="alert">
          Your attendance is below 75%. You need to attend {classesNeeded} more classes to improve.
        </div>
      );
    }
    return null;
  };

  return (
    <div className="subject-card">
      <h3>{subject.name}</h3>
      <div className="attendance-details">
        <div className="attendance-box">
          <p>Total</p>
          <span>{subject.total}</span>
        </div>
        <div className="attendance-box">
          <p>Attended</p>
          <span>{subject.attended}</span>
        </div>
        <div className="attendance-box">
          <p>Absent</p>
          <span>{subject.total - subject.attended}</span>
        </div>
        <div className="attendance-box">
          <p>Percentage</p>
          <div className="percentage-container">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path className={`circle ${getAttendanceLevel()}`}
                strokeDasharray={`${calculatePercentage()}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="percentage-text">{calculatePercentage()}%</div>
          </div>
        </div>
      </div>
      {renderAlert()}
      <div className="buttons">
        <button>Class Notes</button>
        <button>View Topics</button>
      </div>
    </div>
  );
};

export default SubjectCard;
