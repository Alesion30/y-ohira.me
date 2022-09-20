const STORAGE_KEY_OPENING = 'y-ohira.me/opening'

export const getDoneOpening = () =>
  localStorage.getItem(STORAGE_KEY_OPENING) === 'true'

export const setDoneOpening = (isDone: boolean) =>
  localStorage.setItem(STORAGE_KEY_OPENING, isDone ? 'true' : 'false')
