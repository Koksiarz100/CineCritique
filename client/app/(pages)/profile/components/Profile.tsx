'use client'
import React from 'react'
import Image from 'next/image';
import PieChart from './Pie';
import '../styles/profile.scss'
import { UserDataComponent } from '../../../components/api/getUserData';

interface UserProfile{
  image: string,
  nickname: string,
  email: string,
  information: string
}

type UserProfiles = Record<string, UserProfile>;

const userprofiles:UserProfiles = {
  profile2:{
    image:'/Default-Profile-Female.jpg', //placeholder image
    nickname: 'Lady Gaga',
    email: 'ladygaga@gmail.com',
    information: 'Amerykańska piosenkarka, kompozytorka, pianistka, autorka tekstów, aktorka, producentka muzyczna, filantropka oraz działaczka LGBT pochodzenia włoskiego. Urodziła się i dorastała w Nowym Jorku.'
  },
  profile1:{
    image:'/Default-Profile-Male.jpg', //placeholder image
    nickname: 'Lady Punk',
    email: 'ladypunk@gmail.com',
    information:'Polski zespół rockowy założony w 1981 roku we Wrocławiu przez gitarzystę Jana Borysewicza i mieszkającego w Warszawie tekściarza Andrzeja Mogielnickiego.'
  },
  profile3:{
    image:'/Default-Profile-Furry.jpg', //placeholder image
    nickname: 'Lady Furry',
    email: 'ladyfurry@gmail.com',
    information:'Dlatego wybiera się płeć przy rejestracji'
  }
}

function Sidebar(image:string, nickname:string, email:string, information:string) {
    return (
        <>
            <div className='profile-info'>Informacje</div>
            <div className='profile-photo-wrapper'>
              <Image src={image} quality={100} alt={'Profile Picture'} width={250} height={250} className='profile-photo'/>
            </div>
            <div className='profile-nickname'>
            <UserDataComponent/>
            </div>
            <div className='profile-email'>
              {email}
            </div>
            <div className='profile-information'>
              {information}
            </div>
        </>
    )
  }

  const data = [13, 800];
  const data2 = [10, 20, 30, 40, 50, 60, 50, 40, 30, 20, 10];
  const data3 = [10, 20, 40];

  function MainContent(){
    return (
    <div className='profile-content'>
      <div className='profile-statistics'>
        <div className='statistics-title'>Statystyki</div>
        <div className='statistics-charts'><PieChart data={data} title='Tytuł1'/><PieChart data={data2}title='Tytuł2'/><PieChart data={data3}title='Tytuł3'/></div>
      </div>
      <div className='profile-review-content'>
        <div className='review-title'>Twoje recenzje</div>
        <div className='review-loop'></div>
      </div>
    </div>
    )
  }
  export default function Profiles() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };
    return (
      <>
        <div className='profile-nav'>
          <button className='toggle-button' onClick={toggleSidebar}>
          Profil
          </button>
        </div>
        <div className={`mainside ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className='sidebar-wrapper'>
        <button className='toggle-button' onClick={closeSidebar}>
        Wróć do statystyk
        </button>
          {Sidebar(
            userprofiles.profile1.image,
            userprofiles.profile1.nickname,
            userprofiles.profile1.email,
            userprofiles.profile1.information
          )}
                  </div>
          <MainContent />
        </div>
      </>
    );
  }