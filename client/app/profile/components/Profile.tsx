import React from 'react'
import Image from 'next/image';
import PieChart from './Pie';

interface UserProfile{
  image: string,
  nickname: string,
  email: string,
  information: string
}

type UserProfiles = Record<string, UserProfile>;

const userprofiles:UserProfiles = {
  profile1:{
    image:'/Default-Profile-Female.jpg', //placeholder image
    nickname: 'Lady Gaga',
    email: 'ladygaga@gmail.com',
    information: 'Amerykańska piosenkarka, kompozytorka, pianistka, autorka tekstów, aktorka, producentka muzyczna, filantropka oraz działaczka LGBT pochodzenia włoskiego. Urodziła się i dorastała w Nowym Jorku.'
  },
  profile2:{
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
          <div className='sidebar-wrapper'>
            <div className='profile-info'>Informacje</div>
            <div className='profile-photo-wrapper'>
              <Image src={image} quality={100} alt={'Profile Picture'} width={250} height={250} className='profile-photo'/>
            </div>
            <div className='profile-nickname'>
              {nickname}
            </div>
            <div className='profile-email'>
              {email}
            </div>
            <div className='profile-information'>
              {information}
            </div>
          </div>
        </>
    )
  }

  const data = [70, 20, 40, 40];
  const colors = ['#FF6384', '#36A2EB', '#FFCE56','#6772EB'];

  function MainContent(){
    return (
    <div className='profile-content'>
      <div className='profile-statistics'>
        <div className='statistics-title'>Statystyki</div>
        <PieChart data={data} colors={colors} />
      </div>
      <div className='profile-review-content'>
        <div className='review-title'>Twoje recenzje</div>
        <div className='review-loop'></div>
      </div>
    </div>
    )
  }

export default function Profiles() {
    return (
      <>
        <div className='profile-nav'>Profil</div>
        <div className='mainside'>
        {Sidebar(userprofiles.profile1.image, userprofiles.profile1.nickname, userprofiles.profile1.email, userprofiles.profile1.information)}
        <MainContent/>
        </div>
      </>
    )
  }