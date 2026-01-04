function toggleTheme() {
  document.body.classList.toggle('dark');

  document.querySelectorAll('.theme-img').forEach(img => {
    img.src = document.body.classList.contains('dark')
      ? img.dataset.dark
      : img.dataset.light;
  });
}

function toggleReading() {
  document.body.classList.toggle('komfort');
  document.body.classList.toggle('kompakt');
}
