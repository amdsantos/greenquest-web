import axios from 'axios'

const api = axios.create({
  baseURL: 'http://greenquest-backend.vercel.app'
})

export default api;