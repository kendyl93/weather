import { roundTo2Decimals, showMin, showMax, showMean, showMode } from './math';

describe('math', () => {
  describe('roundTo2Decimals', () => {
    it('should round up number to 2 decimals', () => {
      const number = 1.115;
      const expectedNumber = 1.12;

      expect(roundTo2Decimals(number)).toEqual(expectedNumber);
    });

    it('should round down number to 2 decimals', () => {
      const number = 1.114;
      const expectedNumber = 1.11;

      expect(roundTo2Decimals(number)).toEqual(expectedNumber);
    });
  });

  describe('showMin', () => {
    it('should find min value', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const expectedNumber = 1;

      expect(showMin(numbers)).toEqual(expectedNumber);
    });
  });

  describe('showMax', () => {
    it('should find max value', () => {
      const numbers = [1, 2, 7, 3, 4, 5, 6];
      const expectedNumber = 7;

      expect(showMax(numbers)).toEqual(expectedNumber);
    });
  });

  describe('showMean', () => {
    it('should calculate mean value', () => {
      const numbers = [5, 2, 3, 1, 1, 1, 1, 1, 4, 1];
      const expectedNumber = 2;

      expect(showMean(numbers)).toEqual(expectedNumber);
    });
  });

  describe('showMode', () => {
    it('should find mode value', () => {
      const numbers = [6, 3, 9, 6, 6, 5, 9, 3];
      const expectedNumber = 6;

      expect(showMode(numbers).mode).toEqual(expectedNumber);
    });
  });
});
