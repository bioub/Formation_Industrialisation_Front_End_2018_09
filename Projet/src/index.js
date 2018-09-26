import $ from 'jquery';
import './custom-bootstrap/custom-bootstrap.js';
import './custom-bootstrap/custom-bootstrap.scss';
import { Clock } from './horloge/horloge';

const spanElt = document.querySelector('.horloge');

const horloge = new Clock(spanElt);
horloge.start();

$('#btn-contact').tooltip({
  trigger: 'hover focus',
});
