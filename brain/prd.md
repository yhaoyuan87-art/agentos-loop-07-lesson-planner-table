# PRD

## Problem
Classroom teachers often need a fast way to review a coming week of lesson blocks before they teach, but early planning tools frequently become too heavy by adding calendars, accounts, student records, grading, or persistence before the core review workflow is proven. This MVP focuses on one local planning view where a teacher can scan curated lesson blocks, narrow the week by practical planning attributes, and inspect the details needed to prepare the next class session.

## Target Users
The primary user is a classroom teacher, specialist, interventionist, or multi-grade educator reviewing a preloaded week of lesson blocks. The user is assumed to be planning from a curated set of lessons rather than creating a full curriculum map. Grade band filtering remains in scope because the teacher may serve multiple groups during the week.

## Goals
Provide a polished static web product that helps a teacher review one week of realistic lesson blocks. The product must support filtering by subject, grade band, duration, preparation status, and material need. It must support search across objectives and activity summaries. Selecting a lesson must reveal subject, grade band, duration, prep status, materials, objective, activity summary, differentiation note, and next preparation action. Empty states must be clear and accessible when no lessons match.

## Non-goals
Batch one will not include accounts, authentication, imports, exports, calendar sync, student data, grading, lesson creation, editing, persistence, server APIs, or stored user preferences. It is not an LMS, gradebook, task manager, or calendar replacement. The product should not introduce React, Next.js, or a build system unless the repository already establishes that convention, because the confirmed MVP is local and static.

## User Stories
As a teacher, I want to scan all lesson blocks for the week so I can understand what is coming up before I prepare materials. As a teacher, I want to filter lessons by subject, grade band, duration, prep status, and material need so I can focus on the blocks that require attention. As a teacher, I want to search objectives and activity summaries so I can quickly find lessons tied to a concept or instructional move. As a teacher, I want to select a lesson and see its materials, objective, activity summary, differentiation note, and next prep action so I know what to do next.

## Acceptance Criteria
The first screen shows realistic seeded lesson blocks without requiring network access or login. Search matches objective and activity summary text case-insensitively. Each filter dimension changes the visible lesson set and can be reset. Selecting a lesson updates a readable detail area. If no lessons match, the UI shows a clear empty state and does not leave stale details in a confusing state. Controls are keyboard reachable, focus is visible, labels are accessible, and the layout works on desktop and mobile. Browser console must show no runtime errors during normal interaction.

## Open Assumptions
The curated seed week is enough to validate planning review value without user-created content. A single next prep action is more useful for batch one than a multi-step checklist. Material need can be represented as a simple filterable category such as none, copies, manipulatives, tech, lab, or reading packet. The teacher benefits from a table/list plus details pattern rather than a calendar grid.