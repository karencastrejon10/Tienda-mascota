const btn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

btn.onclick = () => {
    sidebar.classList.toggle('active');
};
