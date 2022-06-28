import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Day from "./Schedule/Day";
import EditActivities from "./Schedule/EditActivities";

function App() {
  const [activities, setActivities] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9292/activities")
      .then((r) => r.json())
      .then((activities) => setActivities(activities));
  }, [activities]);

  function handleDeleteActivity(id) {
    setActivities(activities.filter((act) => act.id !== id));
  }

  return (
    <div>
      <center>
        <h1>📚 My Schedule List ⚽</h1>
      </center>
      <hr />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Day/:id">
            <Day
              toggle={toggle}
              setToggle={setToggle}
              onDeleteActivity={handleDeleteActivity}
            />
          </Route>
          <Route exact path="/Edit">
            <EditActivities activities={activities} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
