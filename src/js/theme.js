const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeSwitchToggle = document.querySelector('.theme-switch__toggle');

themeSwitchToggle.addEventListener('change', (event) => {
    
    if (event.target.checked) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('ui', Theme.DARK);
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('ui', Theme.LIGHT);
    }
});

const currentTheme = localStorage.getItem('ui');
if (currentTheme) {
  body.classList.add(currentTheme);
  if (body.classList.contains(Theme.DARK)) {
    themeSwitchToggle.checked = true;
  }
} else {
  body.classList.add('light-theme');
}
   


