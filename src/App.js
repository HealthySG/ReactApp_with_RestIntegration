import React, { useEffect, useState} from "react";
import "./App.css";
import SearchTable from "./SearchTable";

function App() { 
  const [user, setUser] = useState([]);
  const [userDetail, setUserDetail] = useState([]);
  const[order,setorder]=useState("ASC");
  const [searchTerm, setsearchTerm] = useState("");
  
  const sorting = (col) => {
    if (order === "ASC") {
    const sorted = [...user].sort((a, b) =>
    a[col] > b[col] ? 1 : -1
    );
    setUser(sorted);
    setorder("DSC");
    }
    if (order === "DSC") {
    const sorted = [...user].sort((a, b) =>
    a[col] > b[col] ? 1 : -1
    );
    setUser(sorted);
    setorder("ASC");
    }
    };
    
  
  const fetchAllUsers = () => {
    return fetch("https://devapi.pepcorns.com/api/test/getAllUsers")
          .then((response) => response.json())
          .then((data) => setUser(data.response));
  }

  const fetchUserDetails = (userIdWithIndex) => {
    console.log(userIdWithIndex);
    const myArray=userIdWithIndex.split("-");
    const index=myArray[0];
    const userId=myArray[1];
    console.log(index);
    console.log(userId);

    fetch("https://devapi.pepcorns.com/api/test/getUserById/"+userId)
          .then((response) => response.json())
          .then((data) => {
             setUserDetail(data.response)
          });
    {userDetail && userDetail.length > 0 && userDetail.map((userObj, index) => {
          document.getElementById('PayId-'+userIdWithIndex).innerHTML=userObj.pay_id;
          document.getElementById('Amount-'+userIdWithIndex).innerHTML=userObj.amount;
          if(userObj.status == 1)
          document.getElementById('Status-'+userIdWithIndex).innerHTML='Active';
          else
          document.getElementById('Status-'+userIdWithIndex).innerHTML='Failed';
    })}
    
  }

  useEffect(() => {
    fetchAllUsers();
  },[])

  return (
    <main>
      <h1>User List</h1>
      <SearchTable searchTerm={searchTerm}></SearchTable>
      <table id="pepcornUserTable">
        <thead>
        <tr>
          <th>User_id</th>
          <th>Name</th>
          <th>Pay_id</th>
          <th>Amount <i class="arrow up" onClick={()=>sorting("Amount")}></i></th>
          <th>status</th>
        </tr>
        </thead>
        <tbody>
        {user && user.length > 0 && user.map((userObj, index) => (
          <tr id={(index+1)+'-'+userObj.user_id}>
            <td id={'userId-'+(index+1)+'-'+userObj.user_id}>
              <a href="#" onClick={() => fetchUserDetails((index+1)+'-'+userObj.user_id)} 
                  className="userIdLink">{userObj.user_id}</a>
            </td>
            <td id={'Name-'+(index+1)+'-'+userObj.user_id}>{userObj.name}</td>
            <td id={'PayId-'+(index+1)+'-'+userObj.user_id}>-</td>
            <td id={'Amount-'+(index+1)+'-'+userObj.user_id}>-</td>
            <td id={'Status-'+(index+1)+'-'+userObj.user_id}>-</td>
          </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default App;