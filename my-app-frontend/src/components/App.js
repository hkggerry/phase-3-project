import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar"
import Home from "./Home";
import Monday from "./Schedule/Monday";
import Tuesday from "./Schedule/Tuesday";


function App() {
  const [schedule, setSchedule] = useState([])
  const [activity, setActivity] = useState([])
  const [dayTwo, setDayTwo] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/calenders')
    .then(r => r.json())
    .then (data=> setSchedule(data))
  }, [])

  useEffect(()=>{
    fetch("http://localhost:9292/activities")
    .then(r => r.json())
    .then (activity=> setActivity(activity))
  }, [])

  function handleAddActivity(newActivity) {
    setActivity([...activity, newActivity]);
  }

  useEffect(()=>{
    fetch('http://localhost:9292/calenders/2')
    .then(r => r.json())
    .then (dayTwo=> setDayTwo(dayTwo))
  }, [])

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
          <Route exact path="/monday">
          <Monday schedule={schedule} activity={activity} onAddActivity={handleAddActivity}/>
          </Route>
          <Route exact path="/Tuesday">
          <Tuesday dayTwo={dayTwo} dayTwoAct={dayTwo.activities}/>
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
