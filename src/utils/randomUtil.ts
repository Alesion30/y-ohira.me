export const getRandom = (min: number, max: number) => {
  const random = Math.floor(Math.random() * (max + 1 - min)) + min
  return random
}
