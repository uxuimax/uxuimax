document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('result').textContent = 'Button clicked at ' + new Date().toLocaleTimeString();
});
