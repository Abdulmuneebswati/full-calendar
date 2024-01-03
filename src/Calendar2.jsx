import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import Tooltip from 'tooltip.js';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const CalendarComponent = () => {
  useEffect(() => {
    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: ['interaction', resourceTimelinePlugin],
      timeZone: 'UTC',
      defaultView: 'resourceTimelineDay',
      aspectRatio: 1.5,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth',
      },
      editable: true,
      resourceRender: function (info) {
        const questionMark = document.createElement('a');
        questionMark.innerText = ' (?) ';

        info.el.querySelector('.fc-cell-text').appendChild(questionMark);

        const tooltip = new Tooltip(
          questionMark,
          {
            html: true,
            title:
              '<span id="wewe">12121dfsfsdfsdfsdfsdfsdfsdfsdsdfsdf<br/>fdfdfdf</span>',
            placement: 'right-start',
            trigger: 'click',
            closeOnClickOutside: true,
            container: 'body',
          },
          {
            onCreate: (data) => {
              // Additional logic if needed
            },
          }
        );
        //ReactDOM.render(<Welcome />, document.getElementById('wewe'));
      },
      resourceLabelText: 'Rooms',
      resources:
        'https://fullcalendar.io/demo-resources.json?with-nesting&with-colors',
      events:
        'https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline',
    });

    calendar.render();

    // Cleanup function (equivalent to componentWillUnmount in class components)
    return () => {
      calendar.destroy();
    };
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  return (
    <div
      id='calendar'
      style={{ maxWidth: '900px', margin: '40px auto' }}
    >
      {/* Calendar will be rendered here */}
    </div>
  );
};

export default CalendarComponent;
