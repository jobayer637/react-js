import React, { useContext, useEffect } from "react";
import { RootContext } from "../Context/ContextProvider";
import {Link, useHistory} from 'react-router-dom'

function Home() {
  const history = useHistory()
  useEffect(()=>{
    if(!loggedInUser.email){
        history.push('/login')
    }
 })

  const { allUser, auth } = useContext(RootContext);
  const [users, setUsers] = allUser;
  const [loggedInUser, setLoggedInUser] = auth

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <div>Logged in User: {loggedInUser.email}</div>
        <div><Link to="/logout">Logout</Link></div>
      </div>
      <div className="card-body">
      {users.map((user, i) => (
        <div>
           <ul>
             <li>Name: {user.name}</li>
             <li>Email: {user.email}</li>
           </ul>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Home;
