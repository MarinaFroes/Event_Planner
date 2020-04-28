
export const setLocalStorage = (name: string, data: any) => {
  localStorage.setItem(name, JSON.stringify(data))
}

export const getLocalStorage = (name: string) => {
  const data = JSON.parse(localStorage.getItem(name) || '{}')
  return data
}