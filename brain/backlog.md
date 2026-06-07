# Backlog

## Batch 1 - Static MVP
HIGH: Create the static application shell using index.html, styles.css, and app.js with semantic regions for filters, lesson results, and selected lesson details. Verify the page opens locally and shows the seeded planning view without network access.

HIGH: Define realistic curated seed lesson blocks in app.js covering multiple subjects, grade bands, durations, preparation statuses, and material needs. Verify each seeded record has materials, objective, activity summary, differentiation note, and next prep action.

HIGH: Implement filter controls for subject, grade band, duration, preparation status, and material need using accessible native controls. Verify each filter changes the visible result set and can combine with the other filters predictably.

HIGH: Implement search across lesson objectives and activity summaries with case-insensitive matching. Verify search works alone, works with active filters, and updates the result count without console errors.

HIGH: Build the lesson list or responsive table so teachers can scan day, title, subject, grade band, duration, prep status, and material need. Verify row or card selection is keyboard reachable and visibly indicates the selected lesson.

HIGH: Build the selected lesson detail panel showing materials, objective, activity summary, differentiation note, and next prep action. Verify selecting different lessons updates all detail fields and filtering reconciles the selected state correctly.

HIGH: Add accessible empty states for no matching lessons and no selected lesson under current criteria. Verify stale lesson details are not misleadingly displayed after filters or search remove all matches.

HIGH: Polish responsive CSS for desktop and mobile layouts with visible focus states, readable spacing, and stable controls. Verify the interface remains usable on narrow screens without overlapping text or broken layout.

## Batch 2 - Planning Clarity
MEDIUM: Add summary counts for total visible lessons and lessons needing preparation, while keeping all data local and derived from seed records. Verify counts update correctly after every search and filter change.

MEDIUM: Add a reset controls action that clears search and filters and restores the default selected lesson. Verify reset is keyboard accessible and produces the same state as a fresh page load.

## Deferred
LOW: Consider local persistence only after the curated planning review flow is validated and a privacy-safe storage decision is documented. Verify any future persistence can be disabled or cleared easily.

LOW: Consider import, export, and calendar sync only after the static MVP demonstrates value without integrations. Verify future integration work does not introduce student data or account requirements by default.