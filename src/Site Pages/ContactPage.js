import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  const date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[date.getDay()];

  return (
    <div className="contact-page">
      <div className="fade-in">
        <h1>Contact Information</h1>
        <div className="contact-info-container">
          <div className="contact-info-left">
            <div className="left-address">
              <FontAwesomeIcon icon={faHouseChimney} />
            </div>
            <div className="right-address">
              <p className="contact-info">
                Blondies Hair Detailing<br />
                3907 Calumet Ave,
                Suite 206<br />
                Valparaiso, IN 46385, US
              </p>
            </div>
            <p className="contact-info">
              <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;Phone: 219-508-4730
            </p>
          </div>
          <div className="contact-info-right">
            <p className="contact-info1">Business Hours:</p>
            <table className="business-hours">
              <tbody>
                <tr className={currentDay === 'Tuesday' ? 'current-day' : ''}>
                  <td>Tuesday</td>
                  <td>9am - 8pm</td>
                </tr>
                <tr className={currentDay === 'Wednesday' ? 'current-day' : ''}>
                  <td>Wednesday</td>
                  <td>1pm - 8pm</td>
                </tr>
                <tr className={currentDay === 'Thursday' ? 'current-day' : ''}>
                  <td>Thursday</td>
                  <td>11am - 8pm</td>
                </tr>
                <tr className={currentDay === 'Friday' ? 'current-day' : ''}>
                  <td>Friday</td>
                  <td>10am - 3pm</td>
                </tr>
                <tr className={currentDay === 'Saturday' ? 'current-day' : ''}>
                  <td>Saturday</td>
                  <td>9am - 3pm</td>
                </tr>
                <tr className={currentDay === 'Sunday' ? 'current-day' : ''}>
                  <td>Sunday</td>
                  <td>CLOSED</td>
                </tr>
                <tr className={currentDay === 'Monday' ? 'current-day' : ''}>
                  <td>Monday</td>
                  <td>CLOSED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="contact-info">For any questions or concerns, please don't hesitate to reach out!</p>
      </div>
    </div>
  );
};

export default ContactPage;

