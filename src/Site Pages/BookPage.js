import React from 'react';

const BookPage = () => {
  return (
    
    <div>

      <h1>Booking</h1><div className="fade-in">
<div className="booking-details">
      <p>A valid credit card is required to be kept on file for all appointments.</p>
      <p>There is a 3% charge on all credit card transactions. </p>
      <p>Appointment reminders will be sent 72 and 48 hours ahead of time via text.</p>
      <div className="cancel-policy">
      <p>Please View My</p>
      <div class="link-text">
      <a href="/cancellation">
        
      <p className="cancel-policy-text">Cancellation Policy</p>
      </a>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default BookPage;