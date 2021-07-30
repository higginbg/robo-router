import { Robot } from '../models/robot';
import robocop from '../images/robocop.jpg';
import r2d2 from '../images/R2-D2.webp';
import bender from '../images/bender.jpg';
import terminator from '../images/terminator.webp';
import hal from '../images/hal.png';

export const robotsData: Robot[] = [
  { id: 1, name: 'Robocop', image: robocop },
  { id: 2, name: 'R2-D2', image: r2d2 },
  { id: 3, name: 'Bender', image: bender },
  { id: 4, name: 'Terminator', image: terminator },
  { id: 5, name: 'Hal', image: hal },
];
