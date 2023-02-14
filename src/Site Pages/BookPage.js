import React from 'react';

const BookPage = () => {
  return (
    <div className="fade-in">
    <div>
      <h1>Booking</h1>
      <p>A valid credit card is required to be kept on file for all appointments.</p>
      <p>There is a 3% charge on all credit card transactions. </p>
      <p>Appointment reminders will be sent 72 and 48 hours ahead of time via text.</p>
      <div class="link-text">
      <a href="/cancellation">
      <p>Cancellation Policy</p>
      </a>
      </div>
    </div></div>
  );
};

export default BookPage;