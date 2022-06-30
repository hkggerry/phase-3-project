import React, { useState, useEffect } from "react";
import EditForm from "./EditForm";

function EditActivities() {
  const [activities, setActivities] = useState([]);
  const [editActivity, setEditActivity] = useState({
    to_do: "",
    location: "",
    duration: "",
    calender_id: "",
  });

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

  const updatedActivity = {
    to_do: editActivity.to_do,
    location: editActivity.location,
    duration: editActivity.duration,
    calender_id: editActivity.calender_id,
  };

  function handleEditClick(activityId, e) {
    e.preventDefault();
    const clickActivities = activities.filter(
      (activity) => activity.id === activityId
    )[0];
    console.log(clickActivities);
    setEditActivity(clickActivities);
  }

  function handleSubmit(activityId, e) {
    e.preventDefault();
    console.log("update!");
    fetch(`http://localhost:9292/activities/${activityId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedActivity),
    })
      .then((r) => r.json())
      .then(() => console.log({}));
  }

  return (
    <div>
      <div>Update Activities</div>
      {allActivities}
      <EditForm
        handleSubmit={handleSubmit}
        editActivity={editActivity}
        setEditActivity={setEditActivity}
      />
    </div>
  );
}

export default EditActivities;
