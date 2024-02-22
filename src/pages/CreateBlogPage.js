import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();
  //used to go back or forth through history to redirect the user

  const handleSubmit=(e)=>{
    //default action is for the page to submit
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(false);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false);

      //history.go(-1);
      history.push('/'); //user is redirected to home page
    })
  }

  return ( 
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit = {handleSubmit}>
        <label>Blog Title:</label>
        <input 
        type="text" 
        required 
        value={title} 
        onChange = {(e)=>{setTitle(e.target.value)}}/>
        <label>Blog Body:</label>
        <textarea 
        required
        value={body}
        onChange = {(e)=>{setBody(e.target.value)}}>
        </textarea>
        <label>Blog Author:</label>
        <select
        value = {author}
        onChange = {(e)=>{setAuthor(e.target.value)}}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
   );
}
 
export default Create;