---
title: "Calendar"
description: "Come see what we're up to!"
draft: false
bg_image: "images/featue-bg.jpg"
layout: "single"
---

  <style>
    #calendar {
      max-width: 1200px;
      margin: 00px auto;
      font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
      font-size: 14px;
    }
  </style>

<!-- 
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.20/index.global.min.js'></script>
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@6.1.20/index.global.min.js'></script>
<script src='https://github.com/mozilla-comm/ical.js/releases/download/v2.2.1/ical.es5.min.cjs'></script>
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/icalendar@6.1.20/index.global.min.js'></script>
-->
<script src='/plugins/calendar/fullcalendar@6.1.20/index.global.min.js'></script>
<script src='/plugins/calendar/fullcalendar@6.1.20/google-calendar/index.global.min.js'></script>
<script src='/plugins/calendar/ical.es5.min.cjs'></script>
<script src='/plugins/calendar/fullcalendar@6.1.20/icalendar/index.global.min.js'></script>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      googleCalendarApiKey: 'AIzaSyBmOg1FO-pHqTIxoje9UPZJF5F9PcDcUgQ',
      initialView: "dayGridMonth",
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      eventSources: [
          {
            url: 'https://events.pawprintprototyping.org/feed/instance/ics',
            format: 'ics'
          },
          {
            googleCalendarId: 'c_qigb0skvbv9oqi06m52911jrkg@group.calendar.google.com'
          },
          {
            googleCalendarId: 'c_5dfa9108dd981cfa8cc9561bf8fa21e7d17e3ba6bdadb1d6e0a06b1f6f681842@group.calendar.google.com'
          }
      ]
    });
    calendar.render();
  });
</script>
</head>
<body>
  <div id='calendar'></div>
</html>
