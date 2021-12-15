import React, { Suspense }  from 'react';
import './assests/main.css';
import './assests/tailwind.css';
import Loader from './Components/Shared/Loader';
 
// import Home from './Components/Home/Home'
 
const Home = React.lazy(() => import('./Components/Home/Home'));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex flex-col justify-center items-center">
             <Loader/>
          </div>
        }
      >
        <Home />
      </Suspense>
      {/* <Home /> */}
    </>
  );
}

export default App;
