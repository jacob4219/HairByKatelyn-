import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  const date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = days[date.getDay()];

  return (
    <div>
      
        <h1>Contact Information</h1><div className="fade-in">
          <div className="contact-page">
        <div className="contact-info-container">
          <div className="contact-info-left">            
          <div className="contact-info-phone">
            <div className="phone-icon">
            <FontAwesomeIcon icon={faPhone} />
            </div>
          <p>Phone: 219-508-4730</p>
          </div>
          <div className="address-container">
            <div className="address-icon">
              <FontAwesomeIcon icon={faHouseChimney} />
            </div>
              <p className="contact-info-address">
                Blondies Hair Detailing<br />
                3907 Calumet Ave,
                Suite 206<br />
                Valparaiso, IN 46385, US
              </p>
            </div>            
            <div className="map-box">
            <img src="https://api.mapbox.com/styles/v1/square/ck7qg6b2d0gpv1io8svbpvvf9/static/url-https%3A%2F%2Fappointments-production-f.squarecdn.com%2Fappointments%2Fassets%2Fobs%2Flocation-pin-231adca80350d470f43706a9ad37c7aa371bc7b6b0aa0207d9c612d8ccf52a13.png(-87.04006,41.504099)/-87.04006,41.504099,16/400x280?access_token=pk.eyJ1Ijoic3F1YXJlIiwiYSI6ImNpZmE4NnNlbTIwN3FyeWx4bm14MmV6YXQifQ.aZ4Qok0y0R4hyNzRi_qU7A" class="img-desktop display-desktop"/>
</div>
          </div>


          <div className="contact-info-right">
            <p className="contact-info-business-hours">Business Hours:</p>
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
        <p className="contact-info-footer">For any questions or concerns, please don't hesitate to reach out!</p>
      </div>
    </div></div>
  );
};

export default ContactPage;

