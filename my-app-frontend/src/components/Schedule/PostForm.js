import React from "react";

function PostForm({ handleSubmit, handleChange, add }) {
  return (
    <div>
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

export default PostForm;
