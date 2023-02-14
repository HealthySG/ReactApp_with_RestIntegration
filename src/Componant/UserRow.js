import React from "react";

function UserRow({ user }) {
    const [payId, setPayId] = useState(user.payId);
    const [amount, setAmount] = useState(user.amount);
    const [status, setStatus] = useState(user.status);
    function handleClick() {
        setPayId();
        setAmount();
        setStatus();
    }

    const getStatus = (status) => {
        if (status === 0) return 'Failed';
        else return 'Active';
    };
    return (
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
    );
}