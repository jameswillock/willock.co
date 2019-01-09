enum Themes {
  Day = "day",
  Night = "night"
}

class Theme {
  time: Date;
  theme: Themes;
  bodyNode: HTMLElement;

  constructor(time: Date, bodyNode: HTMLElement) {
    this.time = time;
    this.theme = this.defaultTheme();
    this.bodyNode = bodyNode;
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
      this.bodyNode.classList.remove(Themes.Night);
      this.bodyNode.classList.add(Themes.Day);
    } else {
      this.bodyNode.classList.remove(Themes.Day);
      this.bodyNode.classList.add(Themes.Night);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const time = new Date();
  const page = document.getElementsByTagName("body")[0];
  const switcher = document.getElementById("theme-switcher");
  const theme = new Theme(time, page);

  switcher.addEventListener("click", (event) => {
    event.preventDefault();
    theme.toggleTheme();
  })
});

