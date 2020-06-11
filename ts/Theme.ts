import Themes from './Themes';

export default class Theme {
  time: Date;
  theme: Themes;
  body: HTMLElement;

  constructor(time: Date, body: HTMLElement) {
    this.time = time;
    this.theme = this.defaultTheme();
    this.body = body;
    this.setTheme();
  }

  defaultTheme(): Themes.Night | Themes.Day {
    const hour = this.time.getHours();
    if (hour > 6 && hour < 20) return Themes.Day;
    return Themes.Night;
  }

  toggleTheme(): Themes.Night | Themes.Day {
    if (this.theme === Themes.Day) {
      this.theme = Themes.Night;
    } else {
      this.theme = Themes.Day;
    }

    this.setTheme();
    return this.theme;
  }

  setTheme(): void {
    if (this.theme === Themes.Day) {
      this.body.classList.remove(Themes.Night);
      this.body.classList.add(Themes.Day);
    } else {
      this.body.classList.remove(Themes.Day);
      this.body.classList.add(Themes.Night);
    }
  }
}
