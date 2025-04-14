import React, { useEffect, useState } from 'react';
import { getEvents } from '../api/events';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents()
    .then((res) => setEvents(res.data))
    .catch((err) => console.error(err));
  }, []);
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Birthday Events</h1>
      <ul className="space-y-2">
        {events.map((event) => (
          <li key={event.id} className="border p-3 rounded shadow">
            <h2 className="text-lg font-semibold">{event.title}</h2>
            <p>{event.description}</p>
            <p><strong>When:</strong> {new Date(event.start_time).toLocaleString()}</p>
            <p><strong>Where:</strong> {event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
