/**
 * Serialize a raw node.
 *
 * @param {Raw} node
 *   Node to handle.
 * @param {number | undefined} index
 *   Index of `node` in `parent.
 * @param {Parent | undefined} parent
 *   Parent of `node`.
 * @param {State} state
 *   Info passed around about the current state.
 * @returns {string}
 *   Serialized node.
 */
export function raw(
  node: Raw,
  index: number | undefined,
  parent: Parent | undefined,
  state: State
): string
export type State = import('../types.js').State
export type Parent = import('../types.js').Parent
export type Raw = import('../types.js').Raw
