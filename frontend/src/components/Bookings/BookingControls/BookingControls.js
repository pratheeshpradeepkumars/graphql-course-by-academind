import React from 'react';

import "./BookingControls.css";

const BookingControls = props => {
    return (
        <div className="bookings-controls">
          <button className={props.activeOutputType === 'list' ? 'active': ""} onClick={props.changeOutputType.bind(this, 'list')}>List</button>
          <button className={props.activeOutputType === 'chart' ? 'active': ""} onClick={props.changeOutputType.bind(this, 'chart')}>Chart</button>
        </div>
    );
}

export default BookingControls;