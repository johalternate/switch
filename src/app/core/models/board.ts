import { Light, light } from './light';

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

export type BoardState = boolean[][];

export interface Board {
  /**
   * A 2D array with all lights on the board
   */
  lights: Light[][];

  /**
   * Returns the light at the given coordinate.
   */
  get(x: number, y: number): Light | null;

  /**
   * Copies the current state of the board.
   */
  copy(): BoardState;

  /**
   * Patches the current state of the board
   */
  patch(state: BoardState): void;
}

/**
 * Creates a board, initializes it and randomizes its state.
 * @param size The number of rows and columns in the board.
 * @param rounds The number of rounds to run in the randomization step. @see randomize.
 * @returns An initialized board of the given size.
 */
export function board(size: number, rounds: number) {
  const board = create(size);
  link(board);
  randomize(board, rounds);
  return board;
}

/**
 * Creates a Board object.
 * @param size The number of rows and columns in the board.
 * @returns A board of the given size.
 */
function create(size: number) {
  const board: Board = {
    lights: grid(size, size),
    get(x: number, y: number) {
      try {
        return this.lights[y][x];
      } catch (error) {
        return null;
      }
    },
    copy() {
      return this.lights.map((row) => row.map((light) => light.on()));
    },
    patch(state: boolean[][]) {
      for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state[i].length; j++) {
          this.lights[i][j].on.set(state[i][j]);
        }
      }
    },
  };
  return board;
}

/**
 * Creates a grid of Lights.
 * @param width The width of the grid.
 * @param height The height of the grid.
 * @returns A 2D array of Light objects
 */
function grid(width: number, height: number) {
  const lights: Light[][] = [];
  for (let y = 0; y < height; y++) {
    const row: Light[] = [];
    for (let x = 0; x < width; x++) {
      row.push(light(x, y));
    }
    lights.push(row);
  }
  return lights;
}

/**
 * Links each light on the board to its neighbors.
 * @param board The board to be initialized.
 */
function link(board: Board) {
  for (const light of board.lights.flat()) {
    for (const dir of directions) {
      const x = light.pos.x + dir[0];
      const y = light.pos.y + dir[1];
      const neigh = board.get(x, y);
      if (neigh) light.neighbors.push(neigh);
    }
  }
}

/**
 * Randomizes the given board state.
 * Boards are created with all lights off.
 *
 * @param board The board to be randomized.
 * @param rounds The number of simulation steps to take in the randomization
 * @returns An array containing the lights that where toggled, in the order
 * they where toggled,
 */
function randomize(board: Board, rounds = 1) {
  const steps: Light[] = [];
  for (let n = 0; n < rounds; n++) {
    const x = Math.floor(Math.random() * board.lights.length);
    const y = Math.floor(Math.random() * board.lights[0].length);
    const light = board.get(x, y);
    if (light) {
      light.toggle();
      steps.push(light);
    }
  }
  return steps;
}
