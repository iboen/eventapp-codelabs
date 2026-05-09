## Why

Community members currently lack a centralized way to discover and register for workshops and talks. Providing a browseable event directory will increase member engagement, simplify the discovery process, and streamline event registration.

## What Changes

- **Event Directory Homepage**: A new landing page that displays a list of upcoming events.
- **Event Card Component**: Responsive cards displaying event details (title, date, location, type, status).
- **Search & Filtering**: Real-time keyword search and category filtering by event type (Workshop, Talk, Online).
- **Empty & Error States**: User-friendly messages for when no events are available or when data fetching fails.
- **Navigation**: Clickable event cards that redirect to event detail pages.

## Capabilities

### New Capabilities
- `event-directory`: Covers the event listing, searching, filtering, and navigation logic on the homepage.

### Modified Capabilities
<!-- None -->

## Impact

- **Frontend**: New components for the directory page, event cards, search bar, and category filters.
- **Data Layer**: Integration with an event API (or mock service) to fetch and sort upcoming events.
- **Routing**: Update router to handle the directory homepage and navigation to detail pages.
- **UX**: Improved discovery experience for community members.
