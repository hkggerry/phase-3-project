import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar"
import Home from "./Home";
import Monday from "./Schedule/Monday";


function App() {
  const [schedule, setSchedule] = useState([])

  useEffect(()=>{
    fetch("http://localhost:9292/calenders")
    .then(r => r.json())
    .then (schedule => setSchedule(data))
  }, [])


  return (
    <div>
      <center>
      <h1>My Schedule List</h1>
      </center>
      <hr />
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/monday">
            <Monday schedule={schedule}/>
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
