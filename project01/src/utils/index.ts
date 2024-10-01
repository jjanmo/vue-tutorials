/**
 * @param array : array to shuffle
 * @param count : number of elements to select, default is array length
 * @returns : shuffled array
 */
export function shuffleAndSelect<T>(array: T[], count = array.length) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array.slice(0, count);
}
