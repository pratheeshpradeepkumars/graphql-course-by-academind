import React from 'react';

import "./BookingList.css";

const BookingList = props => {
    return(
        <ul className="bookings__list">
            {props.bookings.map(booking => (
                <li key={booking._id} 
                    className="bookings__item">
                    <div className="bookings__item-content">
                        {booking.event.title} - {new Date   (booking.createdAt).toLocaleDateString()}
                    </div>
                    <div className="bookings__item-actions">
                        <button className="btn" onClick={props.onDelete.bind(this, booking._id)}>Cancel</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default BookingList;