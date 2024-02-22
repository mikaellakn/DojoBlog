import { useEffect, useRef, useState } from "react";
import {getList, setItem} from '../services/list';

const Groceries = () => {
  const [alert, setAlert] = useState(false);
  const [list, setList] = useState([]);
  const [itemInput, setItemInput] = useState('');
  const mounted = useRef(true);
  //value will be preserved for the lifetime of the component

  useEffect(()=> {
    mounted.current = true;
    if(list.length && !alert){
      return;
    }
    getList()
    .then(items => {
      if(mounted.current){
        setList(items)
      }
    })
    return () => mounted.current = false;
  }, [alert, list])

  useEffect(()=>{
    if(alert){
      setTimeout(()=>{
        if(mounted.current){
          setAlert(false);
        }
      }, 1000)
    }
  }, [alert]);

  const handleSubmit =(e)=> {
    e.preventDefault();
    setItem(itemInput)
    .then(()=>{
      if(mounted.current){
        setItemInput('');
        setAlert(true);
      }
    });
  }

  return ( <div className="wrapper">
    <h1>My Grocery List</h1>
    <ul>
      {list.map(item => <li key={item.key}>{item.item}</li>)}
    </ul>
    {alert && <h2>Submit successful! </h2>}
    <form onSubmit={handleSubmit}>
      <label>
        <p>New Item</p>
        <input type="text" value={itemInput} onChange={e => setItemInput(e.target.value)} />
      </label>

      <button type="submit">Submit</button>
    </form>

  </div> );
}
 
export default Groceries;