## ADDED Requirements

### Requirement: Event Directory Homepage
The system SHALL provide a homepage that displays a list of all upcoming events.

#### Scenario: Viewing upcoming events
- **WHEN** a user opens the Event Directory homepage
- **THEN** they SHALL see a list of upcoming events sorted by date (soonest first)

### Requirement: Event Card Details
Each event in the list SHALL be displayed as a card containing specific metadata.

#### Scenario: Event card content
- **WHEN** viewing the event list
- **THEN** each event card SHALL display the event title, date and time, location name, event type badge (Workshop, Talk, or Online), and registration status (Open, Full, or Closed)

### Requirement: Navigation to Event Details
The system SHALL allow users to navigate from the event list to individual event detail pages.

#### Scenario: Clicking an event card
- **WHEN** a user clicks on an event card in the directory
- **THEN** the system SHALL navigate the user to the Event Detail page for that specific event

### Requirement: Real-time Keyword Search
The system SHALL provide a search bar to filter events by keyword.

#### Scenario: Searching for events
- **WHEN** a user types a keyword into the search bar
- **THEN** the system SHALL update the event list in real-time to show only events matching the keyword (title or description), debouncing the input by 300ms

### Requirement: Category Filtering
The system SHALL provide a way to filter events by their type.

#### Scenario: Filtering by category
- **WHEN** a user selects a category filter (All, Workshop, Talk, Online)
- **THEN** the system SHALL update the list to show only events of the selected type

### Requirement: Empty Directory State
The system SHALL handle cases where no upcoming events are available.

#### Scenario: No events found
- **WHEN** there are no upcoming events or no events match the current filters
- **THEN** the system SHALL display a friendly message encouraging members to check back soon

### Requirement: Error Handling and Recovery
The system SHALL gracefully handle failures when fetching event data.

#### Scenario: Data fetch failure
- **WHEN** the system fails to load the event list due to a network or server error
- **THEN** the system SHALL display a user-friendly error message with a "Retry" button to attempt the fetch again
