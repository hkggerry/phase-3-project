import React from "react";

function EditForm({ handleSubmit, editActivity, setEditActivity }) {
  return (
    <form onSubmit={handleSubmit}>
      &nbsp;
      <label htmlFor="to_do">Activity</label>
      <input
        onChange={(e) => setEditActivity(e.target.value)}
        type="text"
        name="to_do"
        value={editActivity.to_do}
      />
      <br />
      <label htmlFor="location">Location</label>
      <input
        onChange={(e) => setEditActivity(e.target.value)}
        type="text"
        name="location"
        value={editActivity.location}
      />
      <br />
      <label htmlFor="duration">Duration</label>
      <input
        onChange={(e) => setEditActivity(e.target.value)}
        type="text"
        name="duration"
        value={editActivity.duration}
      />
      <br />
      <label htmlFor="calender_id">Calender_ID</label>
      <input
        onChange={(e) => setEditActivity(e.target.value)}
        type="number"
        name="calender_id"
        value={editActivity.calender_id}
      />
      <br />
      <input type="submit" value="Update Activity" />
    </form>
  );
}

export default EditForm;
