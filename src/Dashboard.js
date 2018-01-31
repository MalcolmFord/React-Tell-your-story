import React from 'react';
// import Card from './components/card';
import Thumbnails from './components/thumbnail'
import './css/main.css'
const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row h-100">
        {/* This is the sidebar navagation */}
        <div className="col-lg-2 sideNav">
          <Thumbnails />
        </div>
        {/* This will hold the maing content of the page */}
        <div className="col-lg-10 main-content ">

        </div>
      </div>
    </div>
  )
}

export default Dashboard;