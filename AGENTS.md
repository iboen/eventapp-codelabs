<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Objective

Build a community event directory web app where members can browse, register for, and track events, and organizers can create and manage them.

## Rules

- All pages must be responsive (2-col desktop, 1-col mobile for cards)
- Auth-gated actions (register, my events, admin) redirect to login if unauthenticated
- Admin dashboard is restricted to users with the "organizer" role
- Registration state (Open / Full / Closed) must be reflected consistently across listing and detail pages
- Search/filter results update in real-time; debounce keyword input by 300ms
- URL must reflect current search and filter state (shareable links)
- Email sending must not block the registration flow; retry up to 3 times on failure
- Show user-friendly error states with retry options wherever data fetching can fail
- Never disclose which field caused a login failure (security)
