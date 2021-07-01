const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const body = document.querySelector(body);
const themeSwitchToggle = document.querySelector('#theme-switch__toggle');

themeSwitchToggle.addEventListener('change', onThemeSwitchToggle);
function onThemeSwitchToggle(event) {
    adjustedTheme = !event.target.checked ? 'light-theme' : 'dark-theme';

}

let isThemeAdjusted;

localStorage.setTheme('isThemeAdjusted', isThemeAdjusted);

function onThemeSwitchToggle(event) {
    // event.preventDefault();
  
    if (isThemeAdjusted = Theme.LIGHT) {
        body.classlist.add('body.dark-theme');
    } else {
        body.classlist.add('body.light-theme');
    }
    };

    // let isLightTheme = true;
// function onThemeSwitchToggle(event) {
//     event.preventDefault();

//     if (isLightTheme) {
//         body.classlist.add('body.dark-theme');
//     } else {
//         body.classlist.add('body.light-theme');
//     };
//     // isLightTheme = !isLightTheme;
// };