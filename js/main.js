import { initCalendarControls, renderCalendar } from './calendar.js';
import { initModals } from './modals.js';
import { loadData } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  loadData();
  initCalendarControls();
  initModals();
  renderCalendar();
});