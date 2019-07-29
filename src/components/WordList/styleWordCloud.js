import { getRandomNumber } from '../../maths';

export function getClassNames(textSize) {
  return `${assignRandomColor()} ${getTextSize(textSize)} ${assignRandomTextDirection()} ${assignRandomAlignment()}`;
}

export function assignRandomColor() {
  const colours = ['blue', 'green', 'red', 'orange'];
  const index = getRandomNumber(4);
  return `${colours[index]}-text`;
}

export function assignRandomTextDirection() {
  const rotation = ['vertical', 'horizontal'];
  const index = getRandomNumber(2);
  return `${rotation[index]}-text`;
}

export function assignRandomAlignment() {
  const spacing = ['center', 'bottom', 'top']
  const index = getRandomNumber(3);
  return `${spacing[index]}-aligned-text`;
}

export function getTextSize(textSize) {
  const size = ['small', 'medium', 'large', 'extra-large'];
  return (`${size[textSize - 1]}-text`);
}
