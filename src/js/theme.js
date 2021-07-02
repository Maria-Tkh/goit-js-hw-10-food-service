const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeSwitchToggle = document.querySelector('.theme-switch__toggle');
// console.log(themeSwitchToggle);

// 1-й способ

// themeSwitchToggle.addEventListener('change', onThemeSwitchToggleChange);

// let isLightThemeAdjusted;

// function onThemeSwitchToggleChange(event) {
    
//     if (isLightThemeAdjusted = !event.target.checked) {
//         body.classList.remove('dark-theme');
//         body.classList.add('light-theme');
//        localStorage.setItem('ui', Theme.LIGHT);
//     } if (isLightThemeAdjusted = event.target.checked) {
//         //  body.classList.remove('light-theme');
//         body.classList.add('dark-theme');
        
//         localStorage.setItem('ui', Theme.DARK);
//     }
//     // console.log(isLightThemeAdjusted);
// }

// 2-й способ (буль)

let isLightThemeAdjusted = true;

themeSwitchToggle.addEventListener('change', () => {

    if (isLightThemeAdjusted) {
        //  body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('ui', Theme.DARK);
        
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('ui', Theme.LIGHT);
      
    }
      isLightThemeAdjusted = !isLightThemeAdjusted; 
});


