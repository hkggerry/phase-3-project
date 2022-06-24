import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar"
import Home from "./Home";
import Monday from "./Schedule/Monday";
import Tuesday from "./Schedule/Tuesday";
import Day from "./Schedule/Day";


function App() {
 
  const [activity, setActivity] = useState("")
  const [dayOne, setDayOne] = useState("")
  const [dayTwo, setDayTwo] = useState("")
  const [toogle, setToogle] = useState(true)

  useEffect(()=>{
    fetch('http://localhost:9292/calenders/1')
    .then(r => r.json())
    .then (dayOne=> {setDayOne(dayOne); console.log(dayOne)})
  }, [toogle])

  useEffect(()=>{
    fetch('http://localhost:9292/calenders/2')
    .then(r => r.json())
    .then (dayTwo=> setDayTwo(dayTwo))
  }, [])

  useEffect(()=>{
    fetch("http://localhost:9292/activities")
    .then(r => r.json())
    .then (activity=> {setActivity(activity)})
  })

  function handleAddActivity(newActivity) {
    console.log(activity)
    setActivity([...activity, newActivity]);
  }

  function handleDeleteActivity(id){
    const updatedActivities = activity.filter((act) => act.id !== id)
    console.log(updatedActivities)
    setActivity(updatedActivities)
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
          <Route exact path="/monday">
          <Monday dayOne={dayOne} dayOneAct={dayOne.activities} toogle = {toogle} setToogle = {setToogle} onAddActivity={handleAddActivity} onDeleteActivity={handleDeleteActivity} />
          
          </Route>
          <Route exact path="/Tuesday">
          <Tuesday dayTwo={dayTwo} dayTwoAct={dayTwo.activities}/>
          </Route>
          <Route exact path='/Day/:id'>
          <Day toogle = {toogle} setToogle = {setToogle} />
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
