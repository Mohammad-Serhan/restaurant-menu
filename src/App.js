// after react v17 , we do not need to use
// import React from react;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// if used several times (Button, Panel, Avatar),
// or is complex enough on its own (App, FeedStory, Comment) ==> seperate components

function App() {
  // const element = <h1>Hello, world!</h1>; // JSX is a syntax extension to JavaScript

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={""}></Route>
          <Route exact path="/user/register" element={""}></Route>
          <Route exact path="/user/login" element={""}></Route>
          {/*  when React starts looking for urls. it looks over all the over routes. but if it does not find it will render NotFound page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
