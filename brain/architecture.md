# Architecture

## Stack Recommendation
Use a static HTML/CSS/JS implementation with the filenames index.html, styles.css, and app.js unless the repository already contains a different static convention. This is the most appropriate stack because batch one has no persistence, routing, authentication, backend state, API integration, or build-time needs. The UI can be implemented with semantic HTML, modern CSS, and deterministic JavaScript state derived from local seed data.

## Data Model
The core model is LessonBlock. Each lesson block should include id, day, title, subject, gradeBand, durationMinutes, prepStatus, materialNeed, materials, objective, activitySummary, differentiationNote, and nextPrepAction. Optional display fields such as timeLabel or blockLabel may be used if they improve scan quality, but the MVP should avoid modeling a full calendar. Filter state includes subject, gradeBand, duration bucket or exact duration, prepStatus, materialNeed, and searchQuery. Selected state stores the selected lesson id or null when no result is selected.

## Execution Flow
On page load, app.js initializes the curated lesson array, renders filter controls from known values, renders the full lesson list/table, and selects the first available lesson by default. When a search or filter control changes, JavaScript recomputes matching lessons, updates the result count, renders the visible rows/cards, and either keeps the current selection if it remains visible or selects the first matching lesson. If no lessons match, the list shows an accessible empty state and the detail panel explains that no lesson is selected for the current criteria. Clicking or keyboard activating a lesson updates the selected id and detail panel.

## Integrations
There are no external integrations in batch one. The product must run locally in a browser from static files and should not depend on remote assets, APIs, account services, calendar providers, analytics, storage services, or package managers. Icons may be text-free CSS or inline UI symbols if needed, but the core product should not require external font or icon loading.

## Boundaries
The application boundary is the local browser session. The seed data lives in app.js. No data is written to localStorage, sessionStorage, cookies, files, or remote systems. The UI presents planning information only; it does not allow lesson editing, student-specific planning, grade recording, assignment distribution, or calendar scheduling. Accessibility behavior should rely on native controls first, using ARIA only where native semantics do not communicate selection or empty state clearly.

## Risks
A dense table may become hard to use on small screens, so the layout should shift to a stacked list with a detail section on mobile. Too many filters can make a small seed set feel sparse, so controls should show useful defaults and clear result counts. Seed data must feel classroom-specific rather than generic, or the workflow will not demonstrate value. Selection state can become confusing after filters remove the selected lesson, so selection reconciliation must be explicit and tested.