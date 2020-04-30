import { getLocalStorage } from '../utils/authDataRepository'

const absolutePath = 'http://localhost:8080'
const relativePath = 'localhost/api/'

export const endpoint = relativePath || absolutePath

export const access_token = getLocalStorage('access_token')
export const id_token = getLocalStorage('id_token')
