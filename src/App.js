import React, { Suspense } from "react";
import "./assets/main.css";
import "./assets/tailwind.css";
import ComingSoon from "./Components/Shared/ComingSoon";
import Loader from "./Components/Shared/Loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import More_Fac from "./Components/Home/Faculties/More_Fac";

const Home = React.lazy(() => import("./Components/Home/Home"));

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Suspense
              fallback={
                <div className="flex flex-col justify-center items-center">
                  <Loader />
                </div>
              }
            >
              <Home />
            </Suspense>
          </Route>
          <Route path="/home">
            <Suspense
              fallback={
                <div className="flex flex-col justify-center items-center">
                  <Loader />
                </div>
              }
            >
              <Home />
            </Suspense>
          </Route>

          <Route path="/library">
            <Suspense
              fallback={
                <div className="flex flex-col justify-center items-center">
                  <Loader />
                </div>
              }
            >
              <ComingSoon />
            </Suspense>
          </Route>
          <Route path="/about">
            <Suspense
              fallback={
                <div className="flex flex-col justify-center items-center">
                  <Loader />
                </div>
              }
            >
              <ComingSoon />
            </Suspense>
          </Route>
          <Route path="/contact">
            <Suspense
              fallback={
                <div className="flex flex-col justify-center items-center">
                  <Loader />
                </div>
              }
            >
              <ComingSoon />
            </Suspense>
          </Route>
          <Route path="/see_more_committee">
            <Suspense
              fallback={
                <div className="flex flex-col justify-center items-center">
                  <Loader />
                </div>
              }
            >
               <ComingSoon />
            </Suspense>
          </Route>
          <Route path="/see_more_events">
            <Suspense
              fallback={
                <div className="flex flex-col justify-center items-center">
                  <Loader />
                </div>
              }
            >
                <ComingSoon />
            </Suspense>
          </Route>
        </Switch>
        {/* <Home /> */}
      </Router>
    </>
  );
}

export default App;
