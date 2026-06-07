const lessons = [
  {
    id: "mon-math-fractions",
    day: "Monday",
    timeLabel: "8:30 AM",
    title: "Fraction Models With Pattern Blocks",
    subject: "Math",
    gradeBand: "Grades 3-5",
    durationMinutes: 45,
    prepStatus: "Needs prep",
    materialNeed: "Manipulatives",
    materials: ["Pattern blocks", "Fraction recording sheets", "Document camera"],
    objective: "Students will represent equivalent fractions using area models and explain one equivalence in writing.",
    activitySummary: "Launch with a quick build, then partners create three equivalent fraction models before a gallery walk comparing strategies.",
    differentiationNote: "Provide pre-shaded templates for students who need visual anchors and challenge early finishers to write a general rule.",
    nextPrepAction: "Set out pattern block trays and print one recording sheet per student."
  },
  {
    id: "mon-ela-inference",
    day: "Monday",
    timeLabel: "10:15 AM",
    title: "Inference Stems in Historical Fiction",
    subject: "ELA",
    gradeBand: "Grades 4-6",
    durationMinutes: 50,
    prepStatus: "Ready",
    materialNeed: "Reading packet",
    materials: ["Short historical fiction excerpt", "Inference stem bookmark", "Sticky notes"],
    objective: "Students will cite text evidence to support an inference about a character's motivation.",
    activitySummary: "Read a shared excerpt, model one inference stem, then students annotate in pairs and defend one inference aloud.",
    differentiationNote: "Offer sentence frames for evidence talk and a second passage paragraph for advanced readers.",
    nextPrepAction: "Place packets and sticky notes at each table group."
  },
  {
    id: "tue-science-ecosystems",
    day: "Tuesday",
    timeLabel: "9:00 AM",
    title: "Food Web Disruption Lab",
    subject: "Science",
    gradeBand: "Grades 6-8",
    durationMinutes: 60,
    prepStatus: "Needs prep",
    materialNeed: "Lab",
    materials: ["Food web cards", "Yarn", "Scenario cards", "Exit ticket slips"],
    objective: "Students will model how removing one organism changes energy flow in an ecosystem.",
    activitySummary: "Teams build a yarn food web, draw disruption cards, and revise their model before writing a cause-effect claim.",
    differentiationNote: "Assign organism cards with icons for multilingual learners and add quantitative energy prompts for extension.",
    nextPrepAction: "Cut scenario cards and bundle one yarn ball per lab group."
  },
  {
    id: "tue-social-debate",
    day: "Tuesday",
    timeLabel: "1:00 PM",
    title: "Town Hall on Local Water Use",
    subject: "Social Studies",
    gradeBand: "Grades 6-8",
    durationMinutes: 45,
    prepStatus: "Partial",
    materialNeed: "Copies",
    materials: ["Role cards", "Claim evidence organizer", "Timer"],
    objective: "Students will use civic reasoning to explain how stakeholder priorities shape public decisions.",
    activitySummary: "Students assume stakeholder roles, prepare a brief claim, and participate in a structured town hall discussion.",
    differentiationNote: "Give highlighted evidence cards to students who need support and moderator prompts to confident speakers.",
    nextPrepAction: "Copy role cards and sort them into mixed-priority groups."
  },
  {
    id: "wed-art-geometry",
    day: "Wednesday",
    timeLabel: "11:00 AM",
    title: "Symmetry Prints and Artist Statements",
    subject: "Art",
    gradeBand: "Grades 3-5",
    durationMinutes: 40,
    prepStatus: "Ready",
    materialNeed: "None",
    materials: ["Construction paper", "Tempera paint", "Reflection half-sheet"],
    objective: "Students will create a symmetrical print and describe the line of symmetry using precise vocabulary.",
    activitySummary: "After a teacher demo, students fold, paint, press, and write a short artist statement naming symmetry choices.",
    differentiationNote: "Use taped fold lines for fine-motor support and invite students to add rotational symmetry extensions.",
    nextPrepAction: "Confirm paint trays are clean and paper is stacked by table."
  },
  {
    id: "wed-phonics-vowel-teams",
    day: "Wednesday",
    timeLabel: "1:15 PM",
    title: "Long Vowel Team Word Sort",
    subject: "Foundational Reading",
    gradeBand: "Grades K-2",
    durationMinutes: 35,
    prepStatus: "Needs prep",
    materialNeed: "Copies",
    materials: ["Vowel team word cards", "Pocket chart", "Decodable sentence strips", "Highlighter pencils"],
    objective: "Students will sort long vowel team words by spelling pattern and read decodable sentences using the target patterns.",
    activitySummary: "Begin with a sound-spelling review, sort word cards as a group, then students partner-read sentence strips and mark the vowel teams.",
    differentiationNote: "Use picture-backed word cards for emerging readers and add mixed-pattern challenge cards for students ready to generalize.",
    nextPrepAction: "Copy and cut word cards, then place sentence strips in table baskets."
  },
  {
    id: "thu-math-data",
    day: "Thursday",
    timeLabel: "8:30 AM",
    title: "Line Plot Decisions From Class Data",
    subject: "Math",
    gradeBand: "Grades 3-5",
    durationMinutes: 35,
    prepStatus: "Partial",
    materialNeed: "Tech",
    materials: ["Projected class data set", "Grid notebooks", "Interactive display"],
    objective: "Students will create a line plot and use it to answer questions about the data distribution.",
    activitySummary: "Students collect a quick measurement data set, build a shared line plot, and write two data-based conclusions.",
    differentiationNote: "Provide partially marked number lines for support and ask advanced students to compare two data clusters.",
    nextPrepAction: "Load the sample data slide and check the display connection before morning work."
  },
  {
    id: "thu-ela-revision",
    day: "Thursday",
    timeLabel: "10:45 AM",
    title: "Revision Clinic for Stronger Leads",
    subject: "ELA",
    gradeBand: "Grades 6-8",
    durationMinutes: 50,
    prepStatus: "Needs prep",
    materialNeed: "Copies",
    materials: ["Lead examples", "Revision checklist", "Student draft folders"],
    objective: "Students will revise an informational writing lead to establish context and engage the reader.",
    activitySummary: "Review three lead types, diagnose sample openings, then revise a draft lead and exchange feedback with a partner.",
    differentiationNote: "Offer selectable lead frames and invite students ready for extension to revise for tone as well as clarity.",
    nextPrepAction: "Print revision checklists and pull draft folders from the writing bin."
  },
  {
    id: "fri-science-weather",
    day: "Friday",
    timeLabel: "12:20 PM",
    title: "Weather Claim From Forecast Maps",
    subject: "Science",
    gradeBand: "Grades 4-6",
    durationMinutes: 45,
    prepStatus: "Ready",
    materialNeed: "Tech",
    materials: ["Forecast map slides", "Claim evidence reasoning template", "Colored pencils"],
    objective: "Students will interpret forecast maps to make a weather claim supported by two pieces of evidence.",
    activitySummary: "Analyze temperature and precipitation maps, mark evidence, and write a short claim evidence reasoning paragraph.",
    differentiationNote: "Use map legends with enlarged labels and offer an optional challenge map with wind data.",
    nextPrepAction: "Open forecast slide deck and place colored pencils near the map station."
  },
  {
    id: "fri-algebra-systems",
    day: "Friday",
    timeLabel: "2:05 PM",
    title: "Systems of Equations Strategy Check",
    subject: "Math",
    gradeBand: "Grades 9-12",
    durationMinutes: 50,
    prepStatus: "Partial",
    materialNeed: "Tech",
    materials: ["Graphing calculator set", "Strategy comparison slides", "Error analysis handout", "Exit ticket form"],
    objective: "Students will choose graphing, substitution, or elimination to solve a system of equations and justify why the strategy fits the system.",
    activitySummary: "Students compare three worked examples, diagnose one incorrect solution, and complete a short strategy check using a digital exit ticket.",
    differentiationNote: "Pair students by complementary strategy strengths and provide coefficient-friendly systems before moving to equations with fractions.",
    nextPrepAction: "Charge calculator caddies and publish the exit ticket form before the afternoon block."
  }
];

const filterConfig = {
  subject: "Subject",
  gradeBand: "Grade band",
  duration: "Duration",
  prepStatus: "Prep status",
  materialNeed: "Material need"
};

const durationOptions = [
  { value: "", label: "Any duration" },
  { value: "short", label: "35-40 minutes" },
  { value: "standard", label: "45-50 minutes" },
  { value: "long", label: "60 minutes" }
];

const state = {
  search: "",
  subject: "",
  gradeBand: "",
  duration: "",
  prepStatus: "",
  materialNeed: "",
  selectedId: null
};

const els = {};
const emptyResultCopy = {
  heading: "No lessons match these filters",
  body: "Try a broader search, change one filter, or reset the planning filters to review the full week again."
};

document.addEventListener("DOMContentLoaded", () => {
  els.form = document.querySelector("#filters-form");
  els.search = document.querySelector("#search");
  els.lessonList = document.querySelector("#lesson-list");
  els.lessonDetails = document.querySelector("#lesson-details");
  els.visibleCount = document.querySelector("#visible-count");
  els.visibleCountLabel = document.querySelector("#visible-count-label");
  els.resultNote = document.querySelector("#result-note");
  els.reset = document.querySelector("#reset-filters");

  renderFilterOptions();
  bindEvents();
  reconcileAndRender();
});

function renderFilterOptions() {
  Object.keys(filterConfig).forEach((key) => {
    const select = document.querySelector(`#${key}`);
    if (key === "duration") {
      setOptions(select, durationOptions);
      return;
    }

    const values = [...new Set(lessons.map((lesson) => lesson[key]))].sort();
    setOptions(select, [
      { value: "", label: `Any ${filterConfig[key].toLowerCase()}` },
      ...values.map((value) => ({ value, label: value }))
    ]);
  });
}

function setOptions(select, options) {
  select.innerHTML = options.map((option) => {
    return `<option value="${escapeAttribute(option.value)}">${escapeHtml(option.label)}</option>`;
  }).join("");
}

function bindEvents() {
  els.form.addEventListener("input", (event) => {
    if (!event.target.name) {
      return;
    }
    state[event.target.name] = event.target.value;
    reconcileAndRender();
  });

  els.form.addEventListener("change", (event) => {
    if (!event.target.name) {
      return;
    }
    state[event.target.name] = event.target.value;
    reconcileAndRender();
  });

  els.reset.addEventListener("click", () => {
    clearFilters();
  });
}

function reconcileAndRender() {
  const matches = getFilteredLessons();
  const selectedStillVisible = matches.some((lesson) => lesson.id === state.selectedId);
  state.selectedId = selectedStillVisible ? state.selectedId : matches[0]?.id ?? null;

  renderResultMeta(matches);
  renderLessonList(matches);
  renderDetails(matches.find((lesson) => lesson.id === state.selectedId));
}

function getFilteredLessons() {
  const query = state.search.trim().toLowerCase();

  return lessons.filter((lesson) => {
    const matchesSearch = !query ||
      lesson.objective.toLowerCase().includes(query) ||
      lesson.activitySummary.toLowerCase().includes(query);
    const matchesDuration = !state.duration || getDurationBucket(lesson.durationMinutes) === state.duration;

    return matchesSearch &&
      matchesDuration &&
      matchesExact(lesson.subject, state.subject) &&
      matchesExact(lesson.gradeBand, state.gradeBand) &&
      matchesExact(lesson.prepStatus, state.prepStatus) &&
      matchesExact(lesson.materialNeed, state.materialNeed);
  });
}

function matchesExact(value, filterValue) {
  return !filterValue || value === filterValue;
}

function getDurationBucket(minutes) {
  if (minutes <= 40) {
    return "short";
  }
  if (minutes >= 60) {
    return "long";
  }
  return "standard";
}

function renderResultMeta(matches) {
  const count = matches.length;
  els.visibleCount.textContent = count;
  els.visibleCountLabel.textContent = count === 1 ? "matching lesson" : "matching lessons";
  if (count === 0) {
    els.resultNote.textContent = "No lessons match the current criteria.";
    return;
  }
  els.resultNote.textContent = count === lessons.length
    ? "Showing all lessons."
    : `${count} of ${lessons.length} ${lessons.length === 1 ? "lesson" : "lessons"} match the current criteria.`;
}

function renderLessonList(matches) {
  if (matches.length === 0) {
    els.lessonList.removeAttribute("role");
    els.lessonList.removeAttribute("aria-activedescendant");
    els.lessonList.innerHTML = `
      <div class="empty-state empty-state-results" role="status" aria-labelledby="empty-results-heading">
        <h3 id="empty-results-heading">${emptyResultCopy.heading}</h3>
        <p>${emptyResultCopy.body}</p>
        <button class="text-button empty-action" type="button" data-action="clear-filters">Reset filters</button>
      </div>
    `;
    els.lessonList.querySelector("[data-action='clear-filters']").addEventListener("click", () => {
      clearFilters();
    });
    return;
  }

  els.lessonList.setAttribute("role", "listbox");
  els.lessonList.setAttribute("aria-activedescendant", `lesson-option-${state.selectedId}`);

  els.lessonList.innerHTML = matches.map((lesson) => `
    <button
      class="lesson-card"
      id="lesson-option-${escapeAttribute(lesson.id)}"
      type="button"
      role="option"
      data-id="${escapeAttribute(lesson.id)}"
      aria-selected="${lesson.id === state.selectedId}"
      aria-label="${escapeAttribute(`${lesson.day} ${lesson.timeLabel}, ${lesson.title}, ${lesson.subject}, ${lesson.gradeBand}, ${lesson.durationMinutes} minutes, ${lesson.prepStatus}, ${lesson.materialNeed}`)}"
    >
      <span class="lesson-card-inner">
        <span>
          <span class="lesson-meta">${escapeHtml(lesson.day)} | ${escapeHtml(lesson.timeLabel)} | ${lesson.durationMinutes} min</span>
          <span class="lesson-title">${escapeHtml(lesson.title)}</span>
          <span class="lesson-objective">${escapeHtml(lesson.objective)}</span>
        </span>
        <span class="lesson-tags" aria-label="Lesson attributes">
          <span class="tag">${escapeHtml(lesson.subject)}</span>
          <span class="tag">${escapeHtml(lesson.gradeBand)}</span>
          <span class="tag ${lesson.prepStatus === "Ready" ? "tag-ready" : "tag-action"}">${escapeHtml(lesson.prepStatus)}</span>
          <span class="tag">${escapeHtml(lesson.materialNeed)}</span>
        </span>
      </span>
    </button>
  `).join("");

  els.lessonList.querySelectorAll(".lesson-card").forEach((button) => {
    button.addEventListener("click", () => {
      selectLesson(button.dataset.id);
    });

    button.addEventListener("keydown", (event) => {
      const navigationKeys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
      if (!navigationKeys.includes(event.key)) {
        return;
      }

      event.preventDefault();
      const currentMatches = getFilteredLessons();
      const currentIndex = currentMatches.findIndex((lesson) => lesson.id === button.dataset.id);
      const nextIndex = getKeyboardSelectionIndex(event.key, currentIndex, currentMatches.length);
      selectLesson(currentMatches[nextIndex].id, true);
    });
  });
}

function selectLesson(id, focusSelected = false) {
  state.selectedId = id;
  const matches = getFilteredLessons();
  renderLessonList(matches);
  renderDetails(matches.find((lesson) => lesson.id === state.selectedId));

  if (focusSelected) {
    document.querySelector(`[data-id="${CSS.escape(state.selectedId)}"]`)?.focus();
  }
}

function getKeyboardSelectionIndex(key, currentIndex, total) {
  if (key === "Home") {
    return 0;
  }
  if (key === "End") {
    return total - 1;
  }
  if (key === "ArrowUp" || key === "ArrowLeft") {
    return Math.max(0, currentIndex - 1);
  }
  return Math.min(total - 1, currentIndex + 1);
}

function renderDetails(lesson) {
  if (!lesson) {
    els.lessonDetails.innerHTML = `
      <div class="detail-body">
        <div class="empty-state" role="status" aria-labelledby="empty-details-heading">
          <h3 id="empty-details-heading">No preparation details to show</h3>
          <p>The current filters have no matching lessons, so previous lesson details have been cleared.</p>
        </div>
      </div>
    `;
    return;
  }

  els.lessonDetails.innerHTML = `
    <div class="detail-body">
      <div class="detail-lead">
        <p class="lesson-meta">${escapeHtml(lesson.day)} | ${escapeHtml(lesson.timeLabel)}</p>
        <h3 class="detail-title">${escapeHtml(lesson.title)}</h3>
        <div class="lesson-tags">
          <span class="tag">${escapeHtml(lesson.subject)}</span>
          <span class="tag">${escapeHtml(lesson.gradeBand)}</span>
          <span class="tag ${lesson.prepStatus === "Ready" ? "tag-ready" : "tag-action"}">${escapeHtml(lesson.prepStatus)}</span>
        </div>
      </div>

      <div class="detail-grid" aria-label="Selected lesson facts">
        <div class="detail-stat"><span>Duration</span><strong>${lesson.durationMinutes} minutes</strong></div>
        <div class="detail-stat"><span>Material need</span><strong>${escapeHtml(lesson.materialNeed)}</strong></div>
      </div>

      <section class="detail-section" aria-labelledby="materials-heading">
        <h3 id="materials-heading">Materials</h3>
        <ul class="materials-list">
          ${lesson.materials.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>

      <section class="detail-section" aria-labelledby="objective-heading">
        <h3 id="objective-heading">Objective</h3>
        <p>${escapeHtml(lesson.objective)}</p>
      </section>

      <section class="detail-section" aria-labelledby="activity-heading">
        <h3 id="activity-heading">Activity Summary</h3>
        <p>${escapeHtml(lesson.activitySummary)}</p>
      </section>

      <section class="detail-section" aria-labelledby="differentiation-heading">
        <h3 id="differentiation-heading">Differentiation Note</h3>
        <p>${escapeHtml(lesson.differentiationNote)}</p>
      </section>

      <section class="detail-section" aria-labelledby="prep-heading">
        <h3 id="prep-heading">Next Prep Action</h3>
        <p>${escapeHtml(lesson.nextPrepAction)}</p>
      </section>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function clearFilters() {
  Object.assign(state, {
    search: "",
    subject: "",
    gradeBand: "",
    duration: "",
    prepStatus: "",
    materialNeed: "",
    selectedId: null
  });
  els.form.reset();
  reconcileAndRender();
  els.search.focus();
}
