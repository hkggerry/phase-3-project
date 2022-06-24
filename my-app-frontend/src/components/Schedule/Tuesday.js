import React, {useState} from "react";

function Tuesday({dayTwo, dayTwoAct}){
    const twoActivities = dayTwoAct.map(data => <div key={data.id}><ul><li>{data.to_do}</li>{data.location}/&nbsp;{data.duration}</ul></div>)


    return(
        <div>
            <center>
            <h3>{dayTwo.day}</h3>
            </center>
            {twoActivities}

        </div>

    )
}

export default Tuesday;