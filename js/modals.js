// modals.js
export function initModals() {
  const container = document.getElementById('modals-container');
  container.innerHTML = \`
    <div id="weightModal" class="modal">
      <h3>Wpisz wagę</h3>
      <input type="number" id="weightInput" />
      <button onclick="saveWeight()">Zapisz</button>
      <button onclick="closeModals()">Zamknij</button>
    </div>
  \`;
}

window.saveWeight = function() {
  const val = document.getElementById('weightInput').value;
  alert('Zapisano wagę: ' + val);
  closeModals();
};

window.closeModals = function() {
  document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
};