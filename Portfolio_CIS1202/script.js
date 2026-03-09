function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function showTab(tab) {
  const tech = document.getElementById('tech-skills');
  const soft = document.getElementById('soft-skills');
  if(tab === 'tech') {
    tech.classList.remove('is-hidden');
    tech.classList.add('is-visible');
    soft.classList.remove('is-visible');
    soft.classList.add('is-hidden');
  } else {
    tech.classList.remove('is-visible');
    tech.classList.add('is-hidden');
    soft.classList.remove('is-hidden');
    soft.classList.add('is-visible');
  }
}