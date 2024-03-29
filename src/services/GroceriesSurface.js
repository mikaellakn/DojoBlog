export function getList(){
  return fetch('http://localhost:8002/list')
  .then(data => data.json())
  //get is the default method, so no need to specify that
}

export function setItem(item){
  return fetch('http://localhost:8002/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({item})
  })
  .then(data => data.json());
}