import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Forms from './Components/Forms'
import Registration from './Components/Registration'
import { useState } from 'react';

function App() {

  const [userData, setUserData]= useState()

  const registrationDetails = (data) => {
    setUserData(data);
  };



 return(
  <Router>
      <div className='form'>
        <div>
          <Routes>
            <Route path="/" element={<Forms registrationDetails={registrationDetails}/>} />
            <Route path="/registration" element={<Registration userData={userData}/>} />
          </Routes>
        </div>
      </div>
    </Router>
 )
}

export default App
