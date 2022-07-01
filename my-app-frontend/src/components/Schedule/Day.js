import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostActivity from "./PostActivity";

function Day() {
  const [day, setDay] = useState("");
  const [toggle, setToggle] = useState(true);
  const [deleteActivities, setDeleteActivities] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    fetch(`http://localhost:9292/calenders/${id}`)
      .then((r) => r.json())
      .then((day) => setDay(day.activities));
  }, [toggle]);

  const activities = day
    ? day.map((data) => (
        <div key={data.id}>
          <ul>
            <li>{data.to_do}</li>
            {data.location}/&nbsp;{data.duration}&nbsp;
            <button onClick={(e) => handleDeleteClick(data.id, e)}>X</button>
          </ul>
        </div>
      ))
    : null;

  function handleDeleteClick(activityId, e) {
    e.preventDefault();
    console.log("Deleting", activityId);
    fetch(`http://localhost:9292/activities/${activityId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteActivity(activityId);
        setToggle(!toggle);
        console.log(activityId);
      });
  }

  function onDeleteActivity(id) {
    setDeleteActivities(deleteActivities.filter((act) => act.id !== id));
  }

  return (
    <div>
      {activities}
      <div>Add Activities</div>
      <PostActivity toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export default Day;
