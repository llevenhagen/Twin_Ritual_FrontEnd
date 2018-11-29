import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://pacific-oasis-69769.herokuapp.com/'
  })
}
