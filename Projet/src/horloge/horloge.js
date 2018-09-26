import css from './horloge.css';

export class Clock {

  constructor(container) {
    this.container = container;
    this.container.classList.add(css.horloge);
  }

  start() {
    this.container.innerText = (new Date).toLocaleTimeString();
    setInterval(() => {
      this.container.innerText = (new Date).toLocaleTimeString();
    }, 1000);
  }

}
