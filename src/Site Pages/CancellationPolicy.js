import React from 'react';

const CancellationPolicy = () => {
return (
    <div className="fade-in">
<div>
<h1>Cancellation Policy</h1>
<p className="cancellation-policy">
<ul>
<li>A valid credit card is required to be kept on file for all appointments.</li>
<li>A 48-hour notice is required for cancellations.</li>
<li>If the cancellation is made after the 48-hour time frame, there will be a 50% fee for the scheduled services.</li>
<li>No-shows and same-day cancellations will incur a 100% charge for the service cost.</li>
<li>Please note that unforeseen circumstances such as inclement weather or illness will be taken into consideration. I understand that things can come up that are beyond your control.</li>
<li>Appointment reminders will be sent 72 and 48 hours ahead of time via text.</li>
</ul>
</p>
<p className="cancellation-policy">For any questions or concerns, please don't hesitate to reach out!</p>
</div></div>
);
};

export default CancellationPolicy;