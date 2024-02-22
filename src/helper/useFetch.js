import {useState, useEffect} from 'react';

//custom hooks need to start with use
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    //create AbortController const
    const abortConst = new AbortController();

    setTimeout(() => {
      //link the const to the fetch call 
      //by passing its .signal property as a 2nd argument
      fetch(url, {signal: abortConst.signal})
    .then(res => {
      if(!res.ok){
        throw Error('could not fetch data');
      }

      return res.json();
    })
    .then((data) => {
      console.log(data);
      setData(data);
      setIsPending(false);
      setError(null);
    })
    .catch(err=> {
      //catch errors related to abort
      //else if error not related, 
      //continue changing state of variables in Home
      if(err.name === 'AbortError') {
        console.log('fetch aborted');
      }else{
        setIsPending(false);
        setError(err.message);
      }
    })
    }, 1000);

    return ()=> abortConst.abort();
  }, [url]);
  //the second argument of the useEffect function is a dependency array
  //it contains the values that it depends it to run
  //only when the state of these values changes, will it run

  return {data, isPending, error};
}
 
export default useFetch;