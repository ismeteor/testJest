import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000"
// class Users {
//   all() {
//     return axios.get('/users.json').then(resp => resp.data);
//   }
// }
function Users(){

}
Users.all = function(){
  return axios.get('user.json');
}

export { Users };