import React from 'react';

const ContactPage = () => {
  return (
    <div className="fade-in">
      <h1>Contact Information</h1>
      <p className="contact-info">
        Blondies Hair Detailing<br />
        3907 Calumet Ave<br />
        Valparaiso, IN 46385, US
      </p>
      <p className="contact-info">Phone: 219-508-4730</p>
      <p className="contact-info1">Business Hours:</p>
      <table className="business-hours">
        <tbody>
          <tr>
            <td>Tuesday</td>
            <td>9am - 8pm</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>1pm - 8pm</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>11am - 8pm</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>10am - 3pm</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>9am - 3pm</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>CLOSED</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>CLOSED</td>
          </tr>
        </tbody>
      </table>
      <p className="contact-info">For any questions or concerns, please don't hesitate to reach out!</p>
    </div>
  );
};

export default ContactPage;
