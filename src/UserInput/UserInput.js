import React from 'react';


const UserInput = (props) =>{
    
    return(
        <div className="input">
            <input type="text" placeholder="User name" onChange={props.changed} value={props.username} />
        </div>
    )
}
export default UserInput



