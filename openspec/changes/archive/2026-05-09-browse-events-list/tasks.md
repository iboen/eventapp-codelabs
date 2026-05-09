## 1. Setup & Design System

- [x] 1.1 Create `styles/globals.css` with CSS variables for the GDG Cloud Bandung design system tokens (colors, typography, spacing).
- [x] 1.2 Configure Google Fonts (Hanken Grotesk, Inter, JetBrains Mono) in the Next.js layout.
- [x] 1.3 Create `data/events.json` with realistic sample data for workshops, talks, and online events.

## 2. Shared Components

- [x] 2.1 Implement `components/Badge` for event type and registration status.
- [x] 2.2 Implement `components/EventCard` with the specified metadata and responsive styling.
- [x] 2.3 Implement `components/SearchBar` with a 300ms debounce using `useEffect`.
- [x] 2.4 Implement `components/CategoryFilter` with All, Workshop, Talk, and Online options.

## 3. Directory Logic & Page

- [x] 3.1 Create `hooks/useEvents` to fetch and sort events (soonest first) and handle error/retry states.
- [x] 3.2 Implement the main `app/page.tsx` with a 12-column grid layout (desktop) and 4-column (mobile).
- [x] 3.3 Integrate `SearchBar` and `CategoryFilter` with the page state to filter the event list.
- [x] 3.4 Add `components/EmptyState` and `components/ErrorState` for the specified scenarios.

## 4. Final Polish & Testing

- [x] 4.1 Enable navigation from `EventCard` to a placeholder `app/events/[id]/page.tsx`.
- [x] 4.2 Add hover effects and subtle transitions to improve the premium feel of the UI.
- [x] 4.3 Verify the 2-column desktop and 1-column mobile card layout.
