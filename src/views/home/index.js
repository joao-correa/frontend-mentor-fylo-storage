import React from 'react';
import './home-mobile.css';
import './home.css';
import logo from './../../assets/logo.svg';
import iconDocument from './../../assets/icon-document.svg'
import iconFolder from './../../assets/icon-folder.svg'
import iconUpload from './../../assets/icon-upload.svg'

function Features(){
  return (
    <div className="features">
      <div className="brand">
        <img src={logo} alt="logo da empresa"/>
      </div>
      <div className="icons">
        <div className="icon">
          <img src={iconDocument} alt="Icone de documento"/>
        </div>
        <div className="icon">
          <img src={iconFolder} alt="icone de pasta"/>
        </div>
        <div className="icon">
          <img src={iconUpload} alt="icone de upload"/>
        </div>
      </div>
    </div>
  );
}

function Storage () {
  const maxAvailableUsage = 1000;
  const currentUsage = 815;
  const currentUsagePercentage = currentUsage * 100 / maxAvailableUsage;

  return (
    <>
      <div className="storage">
        <span className="usage-info">
          You’ve used  <span className='text-bold'> 815 GB </span> of your storage
        </span>
        <div className="memory-used">
          <div className="memory-used-bar">
            <div className="current-usage" style={{ width: `${currentUsagePercentage}%` }}>
              <div className="circle"></div>
            </div>
          </div>
          <div className="limit-legend">
            <span className='text-bold'> 0 GB </span>
            <span className='text-bold'> {maxAvailableUsage} GB </span>
          </div>
        </div>
      </div>
      <div className="memory-left">
        <span className='big-bold'> { maxAvailableUsage - currentUsage } </span>
        <span className='light-gray'> GB LEFT </span>
      </div>
      <span className='arrow'></span>
    </>
  );
}

function Home() {
  return (
    <div className="home">
      <Features />
      <Storage />
    </div>
  );
}

export default Home;
