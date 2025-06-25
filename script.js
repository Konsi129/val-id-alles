document.getElementById('emotionSlider').addEventListener('input', function(e) {
  document.getElementById('emotionValue').textContent = e.target.value;
});
function exportPDF() {
  alert('PDF-Export (Simulation)');
}
