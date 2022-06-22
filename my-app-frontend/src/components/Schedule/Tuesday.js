import React, {useState} from "react";

function Tuesday({dayTwo, dayTwoAct}){
    const twoActivities = dayTwoAct.map(data => <div key={data.id}><ul><li>{data.to_do}</li>{data.location}/&nbsp;{data.duration}</ul></div>)
    return(
        <div>
            <h2>Tuesday</h2>
            {dayTwo.day}
            {twoActivities}

        </div>

    )
}

export default Tuesday;