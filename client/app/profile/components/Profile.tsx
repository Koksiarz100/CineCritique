import React from 'react'
import Image from 'next/image';

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
    information: 'amerykańska piosenkarka, kompozytorka, pianistka, autorka tekstów, aktorka, producentka muzyczna, filantropka oraz działaczka LGBT pochodzenia włoskiego. Urodziła się i dorastała w Nowym Jorku.'
  },
  profile2:{
    image:'/Default-Profile-Male.jpg', //placeholder image
    nickname: 'Lady Punk',
    email: 'ladypunk@gmail.com',
    information:'polski zespół rockowy założony w 1981 roku we Wrocławiu przez gitarzystę Jana Borysewicza i mieszkającego w Warszawie tekściarza Andrzeja Mogielnickiego.'
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
        <div className='wrapper'>
          <div className='profile-info'>Informacje</div>
          <div className='profile-photo-wrapper'>
            <Image src={image} quality={100} alt={'Profile Picture'} width={250} height={250} className='profile-photo'/>
          </div>
          <div className='profile-nickname'>
            <h3>{nickname}</h3>
          </div>
          <div className='profile-email'>
            <p>{email}</p>
          </div>
          <div className='profile-information'>
            <p>{information}</p>
          </div>
        </div>
        <div className='container'>
        </div>
        </>
    )
  }


  function MainContent(){
    return (
    <div className='profile-content'>tekst w teorii literatury – wypowiedź stanowiąca zamkniętą całość z punktu widzenia treści, często utrwalona graficznie.
    tekst w tekstologii – utrwalony (najczęściej w postaci pisemnej) ciąg znaków językowych, przyjmowany jako niezmienny i niemogący podlegać przemianom w procesie komunikacji językowej.
    tekst w semiotyce – każdy wytwór kultury (tekst kultury) stanowiący całość uporządkowaną według określonych reguł, np. dzieło sztuki, ubiór, zachowanie realizujące jakiś utrwalony wzorzec kulturowy.
    tekst w językoznawstwie strukturalistycznym – przedmiot konkretny służący do przekazywania informacji na bazie rozumianego abstrakcyjnie języka; także fizyczny wytwór sytuacji komunikacyjnej.
    tekst w muzyce – słowa utworu muzycznego, np. piosenki lub arii.
    tekst spójny – koherentna (np. pod względem semantycznym lub formalnym) struktura języka naturalnego.tekst w teorii literatury – wypowiedź stanowiąca zamkniętą całość z punktu widzenia treści, często utrwalona graficznie.
tekst w tekstologii – utrwalony (najczęściej w postaci pisemnej) ciąg znaków językowych, przyjmowany jako niezmienny i niemogący podlegać przemianom w procesie komunikacji językowej.
tekst w semiotyce – każdy wytwór kultury (tekst kultury) stanowiący całość uporządkowaną według określonych reguł, np. dzieło sztuki, ubiór, zachowanie realizujące jakiś utrwalony wzorzec kulturowy.
tekst w językoznawstwie strukturalistycznym – przedmiot konkretny służący do przekazywania informacji na bazie rozumianego abstrakcyjnie języka; także fizyczny wytwór sytuacji komunikacyjnej.
tekst w muzyce – słowa utworu muzycznego, np. piosenki lub arii.
tekst spójny – koherentna (np. pod względem semantycznym lub formalnym) struktura języka naturalnego.tekst w teorii literatury – wypowiedź stanowiąca zamkniętą całość z punktu widzenia treści, często utrwalona graficznie.
tekst w tekstologii – utrwalony (najczęściej w postaci pisemnej) ciąg znaków językowych, przyjmowany jako niezmienny i niemogący podlegać przemianom w procesie komunikacji językowej.
tekst w semiotyce – każdy wytwór kultury (tekst kultury) stanowiący całość uporządkowaną według określonych reguł, np. dzieło sztuki, ubiór, zachowanie realizujące jakiś utrwalony wzorzec kulturowy.
tekst w językoznawstwie strukturalistycznym – przedmiot konkretny służący do przekazywania informacji na bazie rozumianego abstrakcyjnie języka; także fizyczny wytwór sytuacji komunikacyjnej.
tekst w muzyce – słowa utworu muzycznego, np. piosenki lub arii.
tekst spójny – koherentna (np. pod względem semantycznym lub formalnym) struktura języka naturalnego.tekst w teorii literatury – wypowiedź stanowiąca zamkniętą całość z punktu widzenia treści, często utrwalona graficznie.
tekst w tekstologii – utrwalony (najczęściej w postaci pisemnej) ciąg znaków językowych, przyjmowany jako niezmienny i niemogący podlegać przemianom w procesie komunikacji językowej.
tekst w semiotyce – każdy wytwór kultury (tekst kultury) stanowiący całość uporządkowaną według określonych reguł, np. dzieło sztuki, ubiór, zachowanie realizujące jakiś utrwalony wzorzec kulturowy.
tekst w językoznawstwie strukturalistycznym – przedmiot konkretny służący do przekazywania informacji na bazie rozumianego abstrakcyjnie języka; także fizyczny wytwór sytuacji komunikacyjnej.
tekst w muzyce – słowa utworu muzycznego, np. piosenki lub arii.
tekst spójny – koherentna (np. pod względem semantycznym lub formalnym) struktura języka naturalnego.tekst w teorii literatury – wypowiedź stanowiąca zamkniętą całość z punktu widzenia treści, często utrwalona graficznie.
tekst w tekstologii – utrwalony (najczęściej w postaci pisemnej) ciąg znaków językowych, przyjmowany jako niezmienny i niemogący podlegać przemianom w procesie komunikacji językowej.
tekst w semiotyce – każdy wytwór kultury (tekst kultury) stanowiący całość uporządkowaną według określonych reguł, np. dzieło sztuki, ubiór, zachowanie realizujące jakiś utrwalony wzorzec kulturowy.
tekst w językoznawstwie strukturalistycznym – przedmiot konkretny służący do przekazywania informacji na bazie rozumianego abstrakcyjnie języka; także fizyczny wytwór sytuacji komunikacyjnej.
tekst w muzyce – słowa utworu muzycznego, np. piosenki lub arii.
tekst spójny – koherentna (np. pod względem semantycznym lub formalnym) struktura języka naturalnego.tekst w teorii literatury – wypowiedź stanowiąca zamkniętą całość z punktu widzenia treści, często utrwalona graficznie.
tekst w tekstologii – utrwalony (najczęściej w postaci pisemnej) ciąg znaków językowych, przyjmowany jako niezmienny i niemogący podlegać przemianom w procesie komunikacji językowej.
tekst w semiotyce – każdy wytwór kultury (tekst kultury) stanowiący całość uporządkowaną według określonych reguł, np. dzieło sztuki, ubiór, zachowanie realizujące jakiś utrwalony wzorzec kulturowy.
tekst w językoznawstwie strukturalistycznym – przedmiot konkretny służący do przekazywania informacji na bazie rozumianego abstrakcyjnie języka; także fizyczny wytwór sytuacji komunikacyjnej.
tekst w muzyce – słowa utworu muzycznego, np. piosenki lub arii.
tekst spójny – koherentna (np. pod względem semantycznym lub formalnym) struktura języka naturalnego.tekst w teorii literatury – wypowiedź stanowiąca zamkniętą całość z punktu widzenia treści, często utrwalona graficznie.
tekst w tekstologii – utrwalony (najczęściej w postaci pisemnej) ciąg znaków językowych, przyjmowany jako niezmienny i niemogący podlegać przemianom w procesie komunikacji językowej.
tekst w semiotyce – każdy wytwór kultury (tekst kultury) stanowiący całość uporządkowaną według określonych reguł, np. dzieło sztuki, ubiór, zachowanie realizujące jakiś utrwalony wzorzec kulturowy.
tekst w językoznawstwie strukturalistycznym – przedmiot konkretny służący do przekazywania informacji na bazie rozumianego abstrakcyjnie języka; także fizyczny wytwór sytuacji komunikacyjnej.
tekst w muzyce – słowa utworu muzycznego, np. piosenki lub arii.
tekst spójny – koherentna (np. pod względem semantycznym lub formalnym) struktura języka naturalnego.</div>
    )
  }

export default function Profiles() {
    return (
      <>
        <div className='profile-title'>Profil</div>
        <div className='mainside'>
        {Sidebar(userprofiles.profile1.image, userprofiles.profile1.nickname, userprofiles.profile1.email, userprofiles.profile1.information)}
        <MainContent/>
        </div>
      </>
    )
  }