import { light } from './light';

describe('Light', () => {
  it('create a light with default state', () => {
    const l = light(2, 3);
    expect(l.pos.x).toBe(2);
    expect(l.pos.y).toBe(3);
    expect(l.on()).toBeFalsy();
    expect(l.neighbors).toEqual([]);
  });

  it('toggle a light and its neighbors', () => {
    const l1 = light(1, 1);
    const l2 = light(2, 2);
    l1.neighbors.push(l2);

    l1.toggle();
    expect(l1.on()).toBeTruthy();
    expect(l2.on()).toBeTruthy();

    l1.toggle();
    expect(l1.on()).toBeFalsy();
    expect(l2.on()).toBeFalsy();
  });

  it('single toggle only affects the light itself', () => {
    const l1 = light(1, 1);
    const l2 = light(2, 2);
    l1.neighbors.push(l2);

    l1.toggle(true);
    expect(l1.on()).toBeTruthy();
    expect(l2.on()).toBeFalsy();
  });

  it('neighbors are toggled but do not trigger further toggles', () => {
    const l1 = light(1, 1);
    const l2 = light(2, 2);
    l1.neighbors.push(l2);
    l2.neighbors.push(l1);

    l1.toggle();
    expect(l1.on()).toBeTruthy();
    expect(l2.on()).toBeTruthy();

    l2.toggle();
    expect(l1.on()).toBeFalsy();
    expect(l2.on()).toBeFalsy();
  });
});
