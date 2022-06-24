import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar"
import Home from "./Home";
import Day from "./Schedule/Day";


function App() {
 
  const [activity, setActivity] = useState("")
  const [toggle, setToggle] = useState(true)


  useEffect(()=>{
    fetch("http://localhost:9292/activities")
    .then(r => r.json())
    .then (activity=> {setActivity(activity)})
  })

  // function handleDeleteActivity(id){
  //   const updatedActivities = activity.filter((act) => act.id !== id)
  //   console.log(updatedActivities)
  //   setActivity(updatedActivities)
  // }

  

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
          <Route exact path='/Day/:id'>
          <Day toggle={toggle} setToggle={setToggle} />
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
