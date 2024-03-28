/**
 * Generates a non cryptographically random string used for IDS in the UI/DOM.
 */
export function getRandomId() {
  return [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
}
