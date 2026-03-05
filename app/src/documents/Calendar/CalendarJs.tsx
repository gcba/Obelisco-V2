'use client';

import React, { useState } from 'react';
declare const bootstrap: {
  Collapse: {
    getOrCreateInstance: (element: Element) => { show: () => void };
  };
};

type Event = {
  date: string;
  caption: string;
};

type Day = {
  day: number;
  currentMonth: boolean;
  date: string;
  events: Array<Event>;
};

const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const YEARS = Array.from({ length: 26 }, (_, i) => 2026 - i).reverse();

const EVENTS_LIST: Array<Event> = [
  {
    date: '2026-02-01', // formato: año-mes-dia
    caption: 'Evento 1',
  },
  {
    date: '2026-02-01',
    caption: 'Evento 2',
  },
  {
    date: '2026-02-02',
    caption: 'Evento 3',
  },
  {
    date: '2026-02-10',
    caption: 'Evento 3',
  },
  {
    date: '2026-02-11',
    caption: 'Evento 3',
  },
  {
    date: '2026-02-11',
    caption: 'Evento 3',
  },
  {
    date: '2026-02-11',
    caption: 'Evento 3',
  },
  {
    date: '2026-02-11',
    caption: 'Evento 3',
  },
  {
    date: '2026-02-16',
    caption: 'Evento 3',
  },
  {
    date: '2026-02-17',
    caption: 'Evento 3',
  },
  {
    date: '2026-02-17',
    caption: 'Evento 3',
  },
];

function getCalendarGrid(month: number, year: number, eventsList: Array<Event> = []) {
  const calendarGrid: Array<Day> = [];

  const updateCalendarGrid = (date: Date, currentMonth = false) => {
    const formattedDate = date.toISOString().split('T')[0];
    calendarGrid.push({
      day: date.getDate(),
      currentMonth,
      date: formattedDate,
      events: eventsList.filter((event) => event.date === formattedDate),
    });
  };

  const firstDayDate = new Date(year, month, 1);
  const firstDateIndex = firstDayDate.getDay();

  const lastDayDate = new Date(year, month + 1, 0);
  const lastDayIndex = lastDayDate.getDay();

  const totalDays = lastDayDate.getDate();

  for (let i = firstDateIndex - 1; i >= 0; i--) {
    const prevDate = new Date(year, month, -i);
    updateCalendarGrid(prevDate);
  }

  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(year, month, i);
    updateCalendarGrid(date, true);
  }

  const remainingDays = 6 - lastDayIndex;
  for (let i = 1; i <= remainingDays; i++) {
    const nextDate = new Date(year, month + 1, i);
    updateCalendarGrid(nextDate);
  }

  return calendarGrid;
}

const CalendarJs: React.FC = () => {
  const todayDate = new Date();
  const formattedTodayDate = todayDate.toISOString().split('T')[0];
  const [selectedDay, setSelectedDay] = useState<Day | undefined>();
  const [selectedDate, setSelectedDate] = useState({
    month: 1,
    year: 2026,
  });

  const grid = getCalendarGrid(selectedDate.month, selectedDate.year, EVENTS_LIST);

  const weeks: Day[][] = [];
  for (let i = 0; i < grid.length; i += 7) {
    weeks.push(grid.slice(i, i + 7));
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate((prev) => ({
      ...prev,
      [e.target.name]: parseInt(e.target.value),
    }));
  };

  const handleDayClick = (day: Day) => {
    const collapseEl = document.querySelector('#collapseCalendar1') as HTMLElement | null;

    if (collapseEl && typeof bootstrap !== 'undefined' && day.events.length) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseEl);
      bsCollapse.show();
    }

    setSelectedDay(day);
  };

  return (
    <div className="calendar interactive">
      <div className="calendar-header d-flex gap-5 mb-4">
        <select
          onChange={handleDateChange}
          value={selectedDate.month}
          name="month"
          className="form-control form-select month"
          aria-label="Mes"
        >
          {MONTHS.map((caption, i) => (
            <option value={i} key={i}>
              {caption}
            </option>
          ))}
        </select>

        <select
          onChange={handleDateChange}
          value={selectedDate.year}
          className="form-control form-select year"
          aria-label="Año"
          name="year"
        >
          {YEARS.map((year, i) => (
            <option value={year} key={i}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="calendar-body">
        <table>
          <thead>
            <tr className="calendar-week-header">
              <th>
                <span>D</span>
              </th>
              <th>
                <span>L</span>
              </th>
              <th>
                <span>M</span>
              </th>
              <th>
                <span>M</span>
              </th>
              <th>
                <span>J</span>
              </th>
              <th>
                <span>V</span>
              </th>
              <th>
                <span>S</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, weekIndex) => (
              <tr className="calendar-week" key={weekIndex}>
                {week.map((day, dayIndex) => {
                  const eventClass = day.events.length ? `event-${day.events.length > 1 ? 'multiple' : 'single'}` : '';

                  const cellClassName = [!day.currentMonth ? 'not-current' : '', eventClass].filter(Boolean).join(' ');

                  const cellProps = day.currentMonth ? { 'data-date': day.date } : {};

                  const isTodayClass = day.date === formattedTodayDate ? 'today' : undefined;
                  const dayClassName = [selectedDay && selectedDay.date === day.date ? 'active' : '', isTodayClass]
                    .filter(Boolean)
                    .join(' ');

                  return (
                    <td
                      onClick={() => handleDayClick(day)}
                      key={dayIndex}
                      className={cellClassName || undefined}
                      {...cellProps}
                    >
                      <span>
                        <span className={dayClassName || undefined}>{day.day}</span>
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="calendar-footer">
        <div className="accordion-item">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseCalendar1"
            aria-expanded="false"
            aria-controls="collapseCalendar1"
          >
            <span className="material-symbols-rounded o-icon" aria-hidden="true">
              calendar_month
            </span>
            <span className="collapse-title">Referencia</span>
          </button>
          <div id="collapseCalendar1" className="accordion-collapse collapse">
            <div className="accordion-body">
              <ul className="calendar-footer-list">
                {EVENTS_LIST.map((item, i) => (
                  <li
                    data-date={item.date}
                    key={i}
                    className={selectedDay?.events.some(({ date }) => item.date === date) ? 'fw-bold' : ''}
                  >
                    <strong>{parseInt(item.date.split('-')[2])}. </strong>
                    {item.caption}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarJs;
