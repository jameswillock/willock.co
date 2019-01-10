import Theme from './ts/Theme';

document.addEventListener("DOMContentLoaded", () => {
  const time = new Date();
  const page = document.body;
  const theme = new Theme(time, page);
  
  const switcher = document.getElementById("theme-switcher");
  switcher.addEventListener("click", (event) => {
    event.preventDefault();
    theme.toggleTheme();
  })
});

