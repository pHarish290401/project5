import React from 'react';
import data from './Data.json';
import icon from './people.svg';
import Resume from './Resume';
import { BrowserRouter, Route ,Link} from 'react-router-dom';
let Profile=()=>{
    const profiles=data.profiles;
    return(
        <div className="parent">
            <BrowserRouter>
                <Route exact path="/resume" component={Resume}></Route>
            </BrowserRouter>
             {profiles.map((i,j)=>(
                <div className="child" key={j}>
                    <img src={icon} alt="profile" />
                     <h2>{i.basics.Name}</h2>
                    <hr></hr>
                    <a href={"mailto:"+i.basics.email} className="link">Mail to : {i.basics.email}</a>
                    <br></br>
                    <a href={"tel:"+i.basics.mobile} className="link">Mobile : {i.basics.mobile}</a>
                    <hr></hr>
                    <Link to={{pathname:"/resume",index:{value:{j}}}} className="btn"> View Profile </Link>
                 </div>
             ))}
        </div>
    )
}

export default Profile;