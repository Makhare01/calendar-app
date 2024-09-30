# Calendar app

This is a calendarapplication with following functionalities

- Add calendar event
- View already added event in calendar
- Edit/Delete existing event
- See calendar week or month view
- Filter calendar events by guests list

## Components

- Calendar - list of all eventsin selected date range
- Calendar Period select, options: Week, Month
- Add event form, by clicking in a specific area of calendar, event adding form appears where user should fill following information: - Event title - Event description - Start date (prefilled according where user adding event) - End date - Start time (prefilled according where user adding event) - End time - Guests (multiple select with list of available users)
- Event details popup, by clicking on a specific event, event details popup appears where is all detailed information regarding event
- Edit event form, from event details popup user can either edit or delete event. By clicking edit button edit event form appears with prefilled information from this event
- Delete event popup, from event details popup user can click 'Delete event' button whic redirects to delete confirmation screen where user can delete event
- Users list - predefined fake users list with checkboxes, by selecting specific (or all) user(s) calendar events will be filtered by these users

## Used tools and frameworks

- Vite react
- MUI
- MUI Date Picker
- Date fns
- React hook form
- Zod
- Zustand

## Run project locally

- Clone repository

```bash
git clone git@github.com:Makhare01/calendar-app.git
```

- Install dependencies

```bash
npm install
```

- Run project (it will serve project on: http://localhost:3000)

```bash
npm run dev
```

### Deployed project link (https://calendar-app-brown.vercel.app/)
