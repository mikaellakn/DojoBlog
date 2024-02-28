export function userExists(username){
  const users = require('../data/tbl_users.json');
  const user = users.users.find(user => user.username === username);
  return user || null;
}

export async function signupUser(credentials){
  fetch('http://localhost:8001/users',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())

  return loginUser(credentials);
}

export async function loginUser({username, password}){
  return userExists(username);
}

