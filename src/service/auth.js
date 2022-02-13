import cookie from 'js-cookie';
import axios from '../utils/axios'

export const authKeys = {
  token: '_gmg_refinery_token',
  account: '_gmg_refinery_account',
}

export const login = ({ email, password }) => {
  return axios.post('/auth/login', { email, password }).then((res) => {
    return res.data
  })
}

export const account = ({ token }) => {
  return axios.get('/auth', { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
    return res.data
  })
}

export const logout = () => {
  cookie.remove(authKeys.token)
  cookie.remove(authKeys.account)
}

export const isAuthenticated = () => {
  const token = cookie.get(authKeys.token)
  if (token) return true
  return false
}

export const getAccountInfo = () => {
  const accountInfo = cookie.get(authKeys.account)
  return accountInfo ? JSON.parse(accountInfo) : accountInfo
}