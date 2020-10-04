// users.js
import axios from 'axios'
const api = 'https://jsonplaceholder.typicode.com/users'

class Users {
  static all () {
    return axios.get(api).then(resp => resp.data)
  }
}

export default Users
