const baseUrl = 'https://5ec377e28ebdcc0016a5a8e4.mockapi.io/api/v1/events';

export const fetchEventsList = () => fetch(baseUrl)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((eventsList) => eventsList);

export const createEvent = (newEvent) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(newEvent),
}).then((response) => {
  if (!response.ok) {
    throw new Error('Failed to create event');
  }
});

export const editEvent = (eventId, dataEvent) => fetch(`${baseUrl}/${eventId}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(dataEvent),
}).then((response) => {
  if (!response.ok) {
    throw new Error('Failed to edit data event');
  }
});

export const deleteEvent = (eventId) => fetch(`${baseUrl}/${eventId}`, {
  method: 'DELETE',
});
