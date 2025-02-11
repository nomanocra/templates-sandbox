const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

/* eslint-disable no-unused-vars */
function toggleSubMenu(btn) {
  const subMenu = btn.nextElementSibling;
  subMenu.classList.toggle('show');
  btn.classList.toggle('rotate-icon');

  if (sidebar.classList.contains('close')) {
    sidebar.classList.toggle('close');
    sidebarToggle.classList.toggle('rotate-icon');
  }
}

function toggleSidebar(btn) {
  sidebar.classList.toggle('close');
  btn.classList.toggle('rotate-icon');

  // Close all submenus when the sidebar is toggled
  Array.from(sidebar.getElementsByClassName('show')).forEach((element) => {
    element.previousElementSibling.classList.remove('rotate-icon');
    element.classList.remove('show');
  });
}
