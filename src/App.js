// after react v17 , we do not need to use
// import React from react;

import Navbar from "./components/Navbar";
// if used several times (Button, Panel, Avatar),
// or is complex enough on its own (App, FeedStory, Comment) ==> seperate components

function App() {
  const element = <h1>Hello, world!</h1>; // JSX is a syntax extension to JavaScript

  return (
    <div className="App">
      <header className="content"> {element}</header>
      <Navbar />
    </div>
  );
}

export default App;
