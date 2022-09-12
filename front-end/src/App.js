// after react v17 , we do not need to use
// import React from react;
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/General/Navbar";
// if used several times (Button, Panel, Avatar),
// or is complex enough on its own (App, FeedStory, Comment) ==> seperate components
import Home from "./pages/Home";
import LogIn from "./components/General/LogIn";
import NotFound from "./components/NotFound";
import Footer from "./components/General/Footer";
import EditMenuItem from "./pages/EditMenuItem";

function App() {
  // const element = <h1>Hello, world!</h1>; // JSX is a syntax extension to JavaScript

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/snacks/edit/:id" element={<EditMenuItem />}></Route>
        <Route exact path="/admin/login" element={<LogIn />}></Route>
        {/*  when React starts looking for urls. it looks over all the over routes. but if it does not find it, will render NotFound page */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;