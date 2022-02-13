import cookie from 'js-cookie'
import { authKeys } from './auth'
import axios from '../utils/axios'

export const getAssets = ({ limit, page, sortBy, reverse }) => {
  const token = cookie.get(authKeys.token)
  let url = `/assets?limit=${limit}&page=${page}`
  if (sortBy) url += `&sortBy=${sortBy}`
  if (reverse) url += `&reverse=${reverse}`

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data)
}