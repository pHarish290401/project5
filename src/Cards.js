import React from 'react';
let Cards=(pr)=>{
    const{name,role}=pr
    return(
        <div>
            <h3>{pr.name} is becoming {pr.role}</h3>
        </div>
    )
}

export default Cards;