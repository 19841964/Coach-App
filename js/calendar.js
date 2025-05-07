// calendar.js
export let startDate = new Date();
export let numberOfWeeks = 3;
export let selectedLanguage = 'pl';
export const translations = {
  pl: { week: 'Tydzień', monday: 'Poniedziałek' },
  en: { week: 'Week', monday: 'Monday' }
};

export function initCalendarControls() {
  const controls = document.getElementById('controls');
  controls.innerHTML = \`
    <button id="prevWeek">&lt;</button>
    <button id="today">Dzisiaj</button>
    <button id="nextWeek">&gt;</button>
    <select id="langSelect">
      <option value="pl">Polski</option>
      <option value="en">English</option>
    </select>
  \`;
  document.getElementById('prevWeek').onclick = () => { startDate.setDate(startDate.getDate() - 7); renderCalendar(); };
  document.getElementById('today').onclick = () => { startDate = new Date(); renderCalendar(); };
  document.getElementById('nextWeek').onclick = () => { startDate.setDate(startDate.getDate() + 7); renderCalendar(); };
  document.getElementById('langSelect').onchange = e => { selectedLanguage = e.target.value; renderCalendar(); };
}

export function renderCalendar() {
  const cal = document.getElementById('calendar');
  cal.innerHTML = '';
  for (let w = 0; w < numberOfWeeks; w++) {
    for (let d = 0; d < 7; d++) {
      const day = document.createElement('div');
      day.className = 'calendar-day';
      const current = new Date(startDate);
      current.setDate(current.getDate() + d + w * 7);
      day.textContent = current.toLocaleDateString(selectedLanguage);
      cal.appendChild(day);
    }
  }
}