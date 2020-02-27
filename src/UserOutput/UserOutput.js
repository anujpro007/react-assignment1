import React from 'react';

const UserOutput = (props) =>{
    const style={
        color:"darkgray",
        textAlign:"left",
     };
    return(
        <div className="output">
            <h2 style={style}>{props.name}</h2>
            <p> {props.p}</p>
           
        </div>
        
    )
}
export default UserOutput