import React, { useState, useEffect } from "react";
import EditForm from "./EditForm";

function EditActivities() {
  const [activities, setActivities] = useState([]);
  const [editActivity, setEditActivity] = useState({});

  useEffect(() => {
    fetch("http://localhost:9292/activities")
      .then((r) => r.json())
      .then((activities) => setActivities(activities));
  }, []);

  const allActivities = activities
    ? activities.map((data) => {
        return (
          <div key={data.id}>
            <ul>
              <li>{data.to_do}</li>
              {data.location}/&nbsp;{data.duration}&nbsp;
              <button onClick={(e) => handleEditClick(data.id, e)}>Edit</button>
            </ul>
          </div>
        );
      })
    : null;

  function handleEditClick(activityId, e) {
    e.preventDefault();
    const clickActivities = activities.filter(
      (activity) => activity.id === activityId
    )[0];
    console.log(clickActivities);
    setEditActivity(clickActivities);
  }

  function handleChange(e) {
    console.log("change");
    setEditActivity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedActivity = {
      to_do: activities.to_do,
      location: activities.location,
      duration: activities.duration,
      calender_id: activities.calender_id,
    };
    // fetch(`http://localhost:9292/activities/${activityId}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(updatedActivity),
    // });
    //   .then((r) => r.json())
    //   .then(()=> activityId)
  }

  return (
    <div>
      <div>Update Activities</div>
      {allActivities}
      <EditForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editActivity={editActivity}
      />
    </div>
  );
}

export default EditActivities;
