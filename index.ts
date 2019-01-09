enum Themes {
  Day = "day",
  Night = "night"
}

class Theme {
  time: Date;
  theme: Themes;
  body: HTMLElement;

  constructor(time: Date, body: HTMLElement) {
    this.time = time;
    this.theme = this.defaultTheme();
    this.body = body;
    this.setTheme();
  }

  defaultTheme() {
    const hour = this.time.getHours();
    if (hour > 6 && hour < 20) return Themes.Day;
    return Themes.Night;
  }

  toggleTheme() {
    if (this.theme === Themes.Day) {
      this.theme = Themes.Night;
    } else {
      this.theme = Themes.Day;
    }

    this.setTheme();
    return this.theme;
  }

  setTheme() {
    if (this.theme === Themes.Day) {
      this.body.classList.remove(Themes.Night);
      this.body.classList.add(Themes.Day);
    } else {
      this.body.classList.remove(Themes.Day);
      this.body.classList.add(Themes.Night);
    }
  }
}

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

