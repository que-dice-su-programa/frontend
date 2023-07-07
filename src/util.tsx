export const shuffle = (array: any[]) => {
  let i = array.length
  let randomIndex = 0

  while (i != 0) {
    randomIndex = Math.floor(Math.random() * i);
    i--;

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}
