// Switch between light and dark theme
document.querySelectorAll('#theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});

// Show alert when clicking a product card
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert('You clicked a product!');
  });
});
