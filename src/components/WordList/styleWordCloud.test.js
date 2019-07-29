import { getRandomNumber } from '../../maths';
import { assignRandomColor, assignRandomTextDirection, assignRandomAlignment, getTextSize } from './styleWordCloud';

jest.mock('../../maths');

describe('styles word cloud', () => {

  test('gets color style class', () => {
    getRandomNumber.mockReturnValueOnce(2);
    expect(assignRandomColor()).toEqual('red-text');
  });

  test('gets text direction style', () => {
    getRandomNumber.mockReturnValueOnce(0);
    expect(assignRandomTextDirection()).toEqual("vertical-text");
  });

  test('gets text alignement style', () => {
    getRandomNumber.mockReturnValueOnce(1);
    expect(assignRandomAlignment()).toEqual("bottom-aligned-text");
  });

  test('gets text size', () => {
    expect(getTextSize(3)).toEqual("large-text");
  });
})
