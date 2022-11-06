import React from "react"


export default function FullName() {
    var profile={
        name: "Ayomikun",
        surname: "Bakare"
    }
    return (
        
        <div>
           <h2> My name is {profile.name + " "+ profile.surname} </h2>
        
        </div>
            
    )
}