import { board } from './board';

describe('Board', () => {
  it('create a board of specified size', () => {
    const b = board(5, 2);
    expect(b.lights.length).toBe(5);
    expect(b.lights[0].length).toBe(5);
  });

  it('get a light at a specific position', () => {
    const b = board(5, 2);
    expect(b.get(2, 2)).toBeDefined();
    expect(b.get(-1, -1)).toBeNull();
  });

  it('copy the board state', () => {
    const b = board(3, 1);
    const stateCopy = b.copy();
    expect(stateCopy.length).toBe(3);
    expect(stateCopy[0].length).toBe(3);
    // Add any additional checks that you need.
  });

  it('patch the board state', () => {
    const b = board(2, 1);
    b.patch([
      [true, false],
      [false, true],
    ]);
    expect(b.get(0, 0)?.on()).toBeTruthy();
    expect(b.get(1, 1)?.on()).toBeTruthy();
    // Add additional checks for all lights if needed.
  });

  it('link neighbors correctly', () => {
    const b = board(3, 0); // 0 cycles because we want to manually check toggles.
    // Toggle one light and check if its neighbors are toggling as expected.
    const targetLight = b.get(1, 1);
    targetLight?.toggle();
    expect(b.get(0, 1)?.on()).toBeTruthy();
    // Check the other neighbors...
  });

  it('randomize the board', () => {
    const b1 = board(3, 10);
    const b2 = board(3, 10);
    expect(b1.copy()).not.toEqual(b2.copy());
  });
});
