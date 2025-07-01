
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}


function toggleMode() {
  document.body.classList.toggle('dark-mode');
  const icon = document.querySelector('.toggle-mode');
  icon.textContent = icon.textContent === '🌙' ? '☀️' : '🌙';
}



window.onscroll = function () {
  document.getElementById('topBtn').style.display = 
    document.documentElement.scrollTop > 50 ? 'block' : 'none';
};

function scrollToTop() {
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
}
