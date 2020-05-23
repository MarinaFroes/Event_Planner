export const setLocalStorage = (name: string, data: any) => {
  if (typeof data === 'string') {
    localStorage.setItem(name, data)
  } else {
    localStorage.setItem(name, JSON.stringify(data))
  }
}

export const getLocalStorage = (name: string) => {
  let data;
  if (name === 'access_token' || name === 'id_token' || name === 'lastUrl') {
    data = localStorage.getItem(name) || ''
  } else {
    data = JSON.parse(localStorage.getItem(name) || '{}')
  }
  return data
}