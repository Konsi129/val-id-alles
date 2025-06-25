function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

function selectScene(type) {
  document.getElementById('sceneStatus').innerText = 'Gewählt: ' + type;
}

document.getElementById('emotionRange').addEventListener('input', function(e) {
  document.getElementById('emotionValue').textContent = e.target.value;
});

document.getElementById('bindungRange').addEventListener('input', function(e) {
  document.getElementById('bindungValue').textContent = e.target.value;
});

function analyzeEmotion() {
  const text = document.getElementById('emotionText').value;
  document.getElementById('gptOutput').textContent = "GPT (simuliert): '" + text + "' wirkt emotional aktiv.";
}

window.onload = function () {
  const ctx = document.getElementById('verlaufChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Szene 1', 'Szene 2', 'Szene 3'],
      datasets: [{
        label: 'Resilienzverlauf',
        data: [4, 6, 5],
        borderWidth: 2
      }]
    },
    options: {
      responsive: false,
      scales: {
        y: { beginAtZero: true, max: 10 }
      }
    }
  });
}