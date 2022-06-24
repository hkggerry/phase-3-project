import React, { useState} from "react";

function Monday({dayOne, dayOneAct, onAddActivity, onDeleteActivity, toogle, setToogle}){

  const oneActivities = dayOneAct? dayOneAct.map(data =><div key={data.id}><ul><li>{data.to_do}</li>{data.location}/&nbsp;{data.duration}&nbsp;<button onClick={handleDeleteClick}>X</button></ul></div>) : null
  const deleteId = dayOneAct? dayOneAct.map(data => (data.id)): null
 

    const [add, setAdd] = useState({
      to_do: "",
      location: "",
      duration: "",
      calender_id: []
    });
  
    function handleSubmit(e) {
        e.preventDefault();
        const newActivity = {
            to_do: add.to_do,
            location: add.location,
            duration: add.duration,
            calender_id: add.calender_id
        } 
        fetch("http://localhost:9292/activities", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(newActivity),
        })
          .then((r) => r.json())
          .then((newData) => {
            onAddActivity(newData)
            setToogle(!toogle)
            setAdd("")
          });
      }

    const handleChange = (e) => {
      setAdd({
        ...add,
        [e.target.name] : e.target.value
      }); 
    }

    function handleDeleteClick(){
      fetch(`http://localhost:9292/activities/${dayOneAct.id}`, {
        method: "DELETE",
      })
      .then((r) => r.json())
      .then(() => onDeleteActivity(dayOneAct.id))
    }

    return(
        <div>
            <center>
            <h3>{dayOne.day}</h3>
            </center>
            {oneActivities}

            <div>Add Activities</div>
             <form onSubmit={handleSubmit}>&nbsp;
            <label htmlFor="to_do">Activity</label>
            <input onChange={handleChange} type="text" name="to_do" value={add.to_do}/><br />
            <label htmlFor="location">Location</label>
            <input onChange={handleChange} type="text" name="location" value={add.location}/><br />
            <label htmlFor="duration">Duration</label>
            <input onChange={handleChange} type="text" name="duration" value={add.duration}/><br />
            <label htmlFor="calender_id">Calender_ID</label>
            <input onChange={handleChange} type="number" name="calender_id" value={add.calender_id}/><br />
            <input type="submit" value="Add Activity" />
            </form>
        </div>
    )}

export default Monday;
