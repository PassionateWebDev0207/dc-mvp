import cookie from 'js-cookie'
import { authKeys } from './auth'
import axios from '../utils/axios'

export const getUsers = ({ limit, page, sortQuery, sortDirection }) => {
  const token = cookie.get(authKeys.token)
  let url = `/accounts?limit=${limit}&page=${page}`
  if (sortQuery) url += `&${sortQuery}`
  if (sortDirection) url += `&${sortDirection}`

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data)
}

export const createUser = ({ data }) => {
  const token = cookie.get(authKeys.token)
  return axios.post('/accounts', data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data)
}

export const updateUser = ({ userId, data }) => {
  const token = cookie.get(authKeys.token)
  return axios.put(`/accounts/${userId}`, data, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data)
}

export const getHistory = ({ limit, page, sortQuery, sortDirection }) => {
  const token = cookie.get(authKeys.token)
  let url = `/accounts/history?limit=${limit}&page=${page}`
  if (sortQuery) url += `&${sortQuery}`
  if (sortDirection) url += `&${sortDirection}`

  return axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data)
}