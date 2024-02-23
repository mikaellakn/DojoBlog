export function userExists(username){
  const users = require('../data/tokens.json');
  
  let i;
  for( i=0; i<users.tokens.length; i++){
    if(users.tokens[i].username === username)
    return true;
  }

  return false;
}

export async function signupUser(credentials){
  return fetch('http://localhost:8001/tokens',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())

}

export async function loginUser(credentials){
  return fetch('http://localhost:8001/tokens')
  .then(data => data.json())

}

