function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function showTab(tab) {
  const tech = document.getElementById('tech-skills');
  const soft = document.getElementById('soft-skills');
  if(tab === 'tech') {
    tech.style.display = 'block';
    soft.style.display = 'none';
  } else {
    tech.style.display = 'none';
    soft.style.display = 'block';
  }
}