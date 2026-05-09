## Context

The GDG Cloud Bandung community needs a centralized event directory. The project is a Next.js application using Vanilla CSS. We have a defined design system from Stitch (GDG Cloud Bandung Design System) which emphasizes a "Corporate Modern" aesthetic with Google branding colors.

## Goals / Non-Goals

**Goals:**
- Create a responsive Event Directory homepage.
- Implement a search and filtering system for events.
- Adhere to the GDG Cloud Bandung Design System (colors, typography, spacing).
- Ensure high-quality UX with proper loading, empty, and error states.
- Support 2-column grid on desktop and 1-column on mobile.

**Non-Goals:**
- Implementation of the event registration logic (backend/API).
- User authentication and profile management (out of scope for this change).
- Advanced sorting (only date-based sorting is required).

## Decisions

- **Framework**: Use Next.js (App Router) for the application structure.
- **Styling**: Use Vanilla CSS for all components. CSS Variables will be used to implement the design system tokens (colors, spacing, typography) from the Stitch spec.
- **State Management**: Use React `useState` and `useMemo` for filtering and searching. A 300ms debounce will be implemented for the search input.
- **Data Fetching**: Implement a custom hook `useEvents` to fetch event data. For the initial phase, this will use a mock service that simulates latency and occasional failures to test UX states.
- **Responsive Layout**: Use CSS Grid for the event list to easily switch between 1 and 2 columns based on media queries.
- **Design Tokens**:
  - Primary Color: `#0058bd` (Blue)
  - Secondary Color: `#b51b15` (Red)
  - Tertiary Color: `#765700` (Yellow)
  - Background: `#f7f9ff`
  - Fonts: `Hanken Grotesk` (Headlines), `Inter` (Body), `JetBrains Mono` (Labels).

## Risks / Trade-offs

- **[Risk] High volume of events leading to slow filter performance** → [Mitigation] Use `useMemo` for filtering logic and plan for pagination/infinite scroll in future iterations.
- **[Risk] Layout shifts during loading** → [Mitigation] Implement skeleton screens or a stable loading indicator to reserve space for the event grid.
- **[Risk] Complexity of maintaining Vanilla CSS for many components** → [Mitigation] Establish a clear CSS naming convention (BEM or similar) and keep styles scoped to components.
