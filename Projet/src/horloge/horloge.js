import css from './horloge.css';
import { format } from 'date-fns';
import config from './config.json';

export class Clock {

  constructor(container) {
    this.container = container;
    this.container.classList.add(css.horloge);
  }

  start() {
    this.container.innerText = format(new Date, config.dateFormat);
    setInterval(() => {
      this.container.innerText = format(new Date, config.dateFormat);
    }, 1000);
  }

}
