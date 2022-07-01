import React, { useState } from "react";
import PostForm from "./PostForm";

function PostActivity({ toggle, setToggle }) {
  const [add, setAdd] = useState({
    to_do: "",
    location: "",
    duration: "",
    calender_id: "",
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
        setAdd({});
      });
  }

  const handleChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <PostForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        add={add}
      />
    </div>
  );
}

export default PostActivity;
