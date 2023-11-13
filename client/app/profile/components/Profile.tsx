import React from 'react'

function Sidebar() {
    return (
        <>
        <div className='wrapper'><div className='profile-info'>Informacje</div></div>
        <div className='container'>
        </div></>

    )
  }

  function MainContent(){
    return (
    <div className='profile-content'></div>
    )
  }

export default function Profiles() {
    return (
      <>
        <div className='profile-title'>Profil</div>
        <div className='mainside'>
        <Sidebar/>
        <MainContent/>
        </div>
      </>
    )
  }