# Roadmap

## Now
Build the local static MVP for reviewing one curated week of lesson blocks. The now milestone includes index.html, styles.css, and app.js; realistic seed lessons; filter controls for subject, grade band, duration, preparation status, and material need; search across objectives and activity summaries; a scannable lesson list/table; a selected lesson detail panel; accessible empty states; responsive styling; and manual verification of core interactions. Review gate: search, every filter, selected details, empty state, keyboard focus, responsive layout, and console cleanliness must all pass before considering batch one complete.

## Next
After the static review workflow proves coherent, add stronger planning affordances without changing the local-only boundary. Candidate improvements include a prep-status summary, clearer day grouping, richer material need categories, a reset-all control, and a lightweight print stylesheet. Review gate: improvements must make review faster without introducing persistence, student data, accounts, or calendar behavior. Usability should be judged by whether a teacher can identify unprepared lessons and required materials within a few interactions.

## Later
Later milestones can consider teacher-authored lesson blocks, local persistence, import/export, calendar views, school schedule templates, and integrations only after the static curated workflow is validated. Student data, grading, LMS behavior, collaboration, and account-based features remain explicitly deferred until there is a clear product need and privacy model. Review gate: any move beyond static local files must include data ownership, privacy, accessibility, and maintenance decisions before implementation.

## Release Criteria
The first release is acceptable when the static page opens locally, presents a realistic weekly planning experience, and all required controls behave predictably across desktop and mobile. The review should confirm there are no console errors, no inaccessible unlabeled controls, no broken selection behavior, no stale detail panel after empty results, and no dependency on network access. The release should feel like a polished product slice, not a wireframe or generic demo.