import React from 'react';
import data from './Data.json';
import icon from './people.svg';
let Resume=(props)=>{
    let info = Object.values(props.location.index.value);
    let person=data.profiles[info];
    console.log(person);
    return(
        <div className="parent">
            <div className="child1">
            <img src={icon} alt="profile" />
                <h3>{person.basics.Name}</h3>
                <h3>{person.basics.email}</h3>
                <h3>{person.basics.mobile}</h3>
            </div>
            <div className="child2">
                <h3> Educational Qualifications </h3> 
                <hr></hr>
                {person.Education.map((i,j)=>(
                    <div key={j}>
                        <h4>{i.Degree}</h4>
                        <ul>
                            <li>{i.Percentage+"%"}</li>
                            <li>{i.Institute}</li>
                        </ul>
                    </div>
                ))} 
                <h3>Skills</h3>     
                <hr></hr>
                {person.Skills.map((x,y)=>(
                    <div>
                        <h4>{x.type}</h4>
                        {x.values.map((k,l)=>(
                            <div key={l} style={{display:"inline"}}>
                                <span className="skill">{k}</span>
                            </div>
                        ))}
                    </div>
                ))} 
            </div>
        </div>
    )
}
export default Resume;