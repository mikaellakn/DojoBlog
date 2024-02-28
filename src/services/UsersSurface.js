export function userExists(username){
  const users = require('../data/tbl_users.json');
  
  let i;
  for( i=0; i<users.users.length; i++){
    if(users.users[i].username === username)
    return true;
  }

  return false;
}

export async function signupUser(credentials){
  return fetch('http://localhost:8001/users',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export async function loginUser(credentials){
  return fetch('http://localhost:8001/users')
  .then(data => data.json())
}

