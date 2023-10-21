import { WritableSignal, signal } from '@angular/core';

export interface Light {
  /**
   * The state of the light
   */
  readonly on: WritableSignal<boolean>;

  /**
   * The position of the light on the grid.
   */
  readonly pos: {
    x: number;
    y: number;
  };

  /**
   * An array of adjacent lights.
   */
  readonly neighbors: Light[];

  /**
   * Toggle light.
   * @param stopPropagation Whether or not adjacent lights should be ignored.
   */
  toggle(stopPropagation?: boolean): void;
}

export function light(x: number, y: number): Light {
  const obj: Light = {
    pos: { x, y },
    on: signal(false),
    neighbors: [],
    toggle(stopPropagation) {
      this.on.set(!this.on());
      if (!stopPropagation) {
        this.neighbors.forEach((light) => light.toggle(true));
      }
    },
  };
  return obj;
}
