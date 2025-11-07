const modal = document.querySelector('.modal');
const modalimg = document.getElementById('modal-img');
const Close = document.querySelector('.close');
const img = document.querySelectorAll('.container-img');
img.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalimg.src = img.src;
  });
});
Close.addEventListener('click', () => {
  modal.style.display = 'none';
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
