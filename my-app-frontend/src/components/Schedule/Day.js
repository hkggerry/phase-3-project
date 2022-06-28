import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Day({ toggle, setToggle, onDeleteActivity }) {
  const [day, setDay] = useState("");
  const id = useParams().id;

  useEffect(() => {
    fetch(`http://localhost:9292/calenders/${id}`)
      .then((r) => r.json())
      .then((day) => setDay(day.activities));
  }, [id]);

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

  const [add, setAdd] = useState({
    to_do: "",
    location: "",
    duration: "",
    calender_id: [],
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newActivity = {
      to_do: add.to_do,
      location: add.location,
      duration: add.duration,
      calender_id: add.calender_id,
    };
    fetch("http://localhost:9292/activities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newActivity),
    })
      .then((r) => r.json())
      .then(() => {
        setToggle(!toggle);
        setAdd("");
      });
  }

  const handleChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };

  function handleDeleteClick(activityId, e) {
    e.preventDefault();
    console.log("Deleting", activityId);
    fetch(`http://localhost:9292/activities/${activityId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteActivity(activityId);
        console.log(activityId);
      });
  }

  return (
    <div>
      {activities}
      <div>Add Activities</div>
      <form onSubmit={handleSubmit}>
        &nbsp;
        <label htmlFor="to_do">Activity</label>
        <input
          onChange={handleChange}
          type="text"
          name="to_do"
          value={add.to_do}
        />
        <br />
        <label htmlFor="location">Location</label>
        <input
          onChange={handleChange}
          type="text"
          name="location"
          value={add.location}
        />
        <br />
        <label htmlFor="duration">Duration</label>
        <input
          onChange={handleChange}
          type="text"
          name="duration"
          value={add.duration}
        />
        <br />
        <label htmlFor="calender_id">Calender_ID</label>
        <input
          onChange={handleChange}
          type="number"
          name="calender_id"
          value={add.calender_id}
        />
        <br />
        <input type="submit" value="Add Activity" />
      </form>
    </div>
  );
}

export default Day;
