/**
 * Data container for the GameOverCmp dialog
 */
export interface GameOverData {
  title?: string;

  /**
   * A Material Symbols Icon
   * @see https://fonts.google.com/icons?icon.set=Material+Symbols
   */
  titleIcon?: string;

  /**
   * The number of moves it took the player to finish the game.
   */
  moves?: number;
}
