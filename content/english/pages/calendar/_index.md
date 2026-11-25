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
    #event-details {
      max-width: 500px;
      width: 90%;
      border: 1px solid #ccc;
      border-radius: 6px;
      padding: 1.5em;
    }
    #event-details h3 { margin-top: 0; }
    #event-details .when, #event-details .where { margin: 0 0 .5em; color: #555; }
    #event-details .description { overflow-wrap: anywhere; }
  </style>

<!-- 
<link href='https://cdn.jsdelivr.net/npm/fullcalendar@7.1.5/skeleton.css' rel='stylesheet' />
<link href='https://cdn.jsdelivr.net/npm/fullcalendar@7.1.5/themes/classic/theme.css' rel='stylesheet' />
<link href='https://cdn.jsdelivr.net/npm/fullcalendar@7.1.5/themes/classic/palette.css' rel='stylesheet' />
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@7.1.5/all/global.js'></script>
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@7.1.5/themes/classic/global.js'></script>
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@7.1.5/global.js'></script>
<script src='https://github.com/mozilla-comm/ical.js/releases/download/v2.2.1/ical.es5.min.cjs'></script>
<script src='https://cdn.jsdelivr.net/npm/@fullcalendar/icalendar@7.1.5/global.js'></script>
-->
<link href='/plugins/calendar/fullcalendar@7.1.5/skeleton.css' rel='stylesheet' />
<link href='/plugins/calendar/fullcalendar@7.1.5/themes/classic/theme.css' rel='stylesheet' />
<link href='/plugins/calendar/fullcalendar@7.1.5/themes/classic/palette.css' rel='stylesheet' />
<script src='/plugins/calendar/fullcalendar@7.1.5/all.global.min.js'></script>
<script src='/plugins/calendar/fullcalendar@7.1.5/themes/classic/global.min.js'></script>
<script src='/plugins/calendar/fullcalendar@7.1.5/google-calendar/global.min.js'></script>
<script src='/plugins/calendar/ical.es5.min.cjs'></script>
<script src='/plugins/calendar/fullcalendar@7.1.5/icalendar/global.min.js'></script>
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
      eventClick: function(info) {
        // Google event URLs lead to a Google login page for anonymous visitors,
        // so show the details we already have in a dialog instead.
        var url = info.event.url || '';
        if (!/^https:\/\/(www\.)?google\.com\//.test(url)) return;
        info.jsEvent.preventDefault();
        var ev = info.event, props = ev.extendedProps || {};
        var dlg = document.getElementById('event-details');
        dlg.querySelector('h3').textContent = ev.title;
        var opts = ev.allDay ? { dateStyle: 'full' } : { dateStyle: 'full', timeStyle: 'short' };
        var when = ev.start ? ev.start.toLocaleString([], opts) : '';
        if (ev.end && !ev.allDay) when += ' \u2013 ' + ev.end.toLocaleString([], { timeStyle: 'short' });
        dlg.querySelector('.when').textContent = when;
        dlg.querySelector('.where').textContent = props.location || '';
        // Descriptions come from our own Google calendars and may contain HTML.
        var desc = props.description || '';
        if (!/<[a-z][\s\S]*>/i.test(desc)) desc = desc.replace(/\n/g, '<br>'); // plain text
        dlg.querySelector('.description').innerHTML = desc;
        dlg.showModal();
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
  <dialog id='event-details'>
    <h3></h3>
    <p class='when'></p>
    <p class='where'></p>
    <div class='description'></div>
    <form method='dialog'><button>Close</button></form>
  </dialog>
</html>
