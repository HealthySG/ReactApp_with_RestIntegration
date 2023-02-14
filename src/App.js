import React, { useEffect, useState} from "react";
import "./App.css";
import "./Componant/UserRow" 
function App() { 
  const [user, setUser] = useState([]);
  
  const fetchAllUsers = () => {
    return fetch("https://devapi.pepcorns.com/api/test/getAllUsers")
          .then((response) => response.json())
          .then((data) => setUser(data.response));
  }

  const fetchUserDetails = (userId) => {
    console.log(userId);
    return fetch("https://devapi.pepcorns.com/api/test/getUserById/"+userId)
          .then((response) => response.json())
          .then((data) => {
            setUserObj(data.response)
          });
  }

  useEffect(() => {
    fetchAllUsers();
  },[])

  return (
    <main>
      <h1>User List</h1>
      <table id="pepcornUserTable">
        <tr>
          <th>User_id</th>
          <th>Name</th>
          <th>Pay_id</th>
          <th>Amount</th>
          <th>status</th>
        </tr>
        
        {user && user.length > 0 && user.map((userObj, index) => (
          <tr id={(index+1)+'-'+userObj.user_id}>
            <td id={'userId-'+(index+1)+'-'+userObj.user_id}>
              <a href="#" onClick={() => fetchUserDetails(userObj.user_id)} 
                  className="userIdLink">{userObj.user_id}</a>
            </td>
            <td id={'Name-'+(index+1)+'-'+userObj.user_id}>{userObj.name}</td>
            <td id={'PayId-'+(index+1)+'-'+userObj.user_id}>-</td>
            <td id={'Amount-'+(index+1)+'-'+userObj.user_id}>-</td>
            <td id={'Status-'+(index+1)+'-'+userObj.user_id}>-</td>
          </tr>
          ))}
        
      </table>
    </main>
  );
}

export default App;