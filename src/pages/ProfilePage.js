import { useState } from "react";

const ProfilePage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit =()=>{
    
  };

  return ( 
    <div className="login-wrapper">
      <h1>Edit Credentials</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <input placeholder="username" type="text" onChange={e => setUsername(e.target.value)} />
        </div>
        <div className='form-field'>
          <input placeholder="password" type="text"  onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className='btn-container'><button className='submit-btn' type="submit">Update</button></div>
      </form>
    </div>
   );
}
 
export default ProfilePage;