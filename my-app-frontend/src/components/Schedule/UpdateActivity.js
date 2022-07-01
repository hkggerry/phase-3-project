import React, { useState, useEffect } from "react";
import UpdateForm from "./UpdateForm";

function UpdateActivity() {
  const [activities, setActivities] = useState([]);
  const [toggle, setToggle] = useState(true);
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
  }, [toggle]);

  const allActivities = activities
    ? activities.map((data) => {
        return (
          <div key={data.id}>
            <ul>
              <li>{data.to_do}</li>
              {data.location}/&nbsp;{data.duration}&nbsp;
              <button onClick={() => handleEditClick(data.id)}>Edit</button>
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

  function handleEditClick(activityId) {
    // debugger;
    const clickActivities = activities.find(
      (activity) => activity.id === activityId
    );
    console.log(clickActivities);
    setEditActivity(clickActivities);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // debugger;
    console.log("update!");
    fetch(`http://localhost:9292/activities/${editActivity.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedActivity),
    })
      .then((r) => r.json())
      .then((data) => {
        setEditActivity(data);
        setToggle(!toggle);
      });
  }

  return (
    <div>
      <h3>Update Activities</h3>
      {allActivities}
      <UpdateForm
        handleSubmit={handleSubmit}
        editActivity={editActivity}
        setEditActivity={setEditActivity}
      />
    </div>
  );
}

export default UpdateActivity;
