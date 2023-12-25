'use client'
import React from 'react';
import Image from 'next/image';
import PieChart from './Pie';
import '../styles/profile.scss';
import { UserDataComponent } from '../../../components/api/getUserData';
import Legend from './PieLegend';
import Statistics from './PieStatistics';
import ReviewComponent from './Reviews';

interface UserProfile {
  image: string;
  nickname: string;
  email: string;
  information: string;
}

type UserProfiles = Record<string, UserProfile>;

const userprofiles: UserProfiles = {
  profile1: {
    image: '/Default-Profile-Male.jpg', //placeholder image
    nickname: 'John Doe',
    email: 'ladypunk@gmail.com',
    information:
      'Polski zespół rockowy założony w 1981 roku we Wrocławiu przez gitarzystę Jana Borysewicza i mieszkającego w Warszawie tekściarza Andrzeja Mogielnickiego.',
  },
};

function Sidebar({
  image,
  nickname,
  email,
  information,
  onSave,
}: UserProfile & { onSave: (updatedProfile: UserProfile) => void }) {
  const [editedProfile, setEditedProfile] = React.useState<UserProfile>({
    image,
    nickname,
    email,
    information,
  });
  const [editedField, setEditedField] = React.useState<keyof UserProfile | null>(null);

  const handleDoubleClick = (field: keyof UserProfile) => {
    const isMobile = window.innerWidth <= 768;
    setEditedField(field);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      onSave(editedProfile);
      setEditedField(null);
    }
  };

  const MAX_INPUT_CHARACTERS = 25;
  const MAX_TEXTAREA_CHARACTERS = 200;

  const handleInputChange = (field: keyof UserProfile, value: string) => {
    let maxLength;
  
    if (field === 'information') {
      maxLength = MAX_TEXTAREA_CHARACTERS;
    } else {
      maxLength = MAX_INPUT_CHARACTERS;
    }
  
    if (value.length <= maxLength) {
      setEditedProfile((prevProfile) => ({
        ...prevProfile,
        [field]: value,
      }));
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      editedField &&
      editedProfile &&
      target.closest('.profile-editable-field') === null
    ) {
      onSave(editedProfile);
      setEditedField(null);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleDocumentClick);
    return () => {
      document.body.removeEventListener('click', handleDocumentClick);
    };
  }, [editedField, editedProfile, onSave]);

  const renderEditableField = (field: keyof UserProfile, content: string) => {
    return editedField === field ? (
      <div className="profile-editable-field">
        {field === 'information' ? (
          <textarea
            value={editedProfile[field]}
            onChange={(e) => handleInputChange(field, e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          field !== 'image' && (
            <input
              type="text"
              value={editedProfile[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          )
        )}
      </div>
    ) : (
      <span
        className={`profile-editable-field ${field === 'image' ? 'non-editable' : ''}`}
        onDoubleClick={() => handleDoubleClick(field)}
      >
        {content}
      </span>
    );
  };

  return (
    <>
      <div className="profile-info">Informacje</div>
      <div className="profile-photo-wrapper" onDoubleClick={() => handleDoubleClick('image')}>
        <Image src={image} quality={100} alt={'Profile Picture'} width={250} height={250} className="profile-photo" />
      </div>
      <div className="profile-nickname">{renderEditableField('nickname', nickname)}</div>
      <div className="profile-email">{renderEditableField('email', email)}</div>
      <div className="profile-information">{renderEditableField('information', information)}</div>
    </>
  );
}

const data = [13, 800];
const data2 = [10, 20, 30, 40, 50, 60, 50, 40, 30];
const data3 = [10, 20, 40];
const legend = ['Ty', 'Użytkownicy'];
const legend2 = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5'];
const legend3 = ['Docenienia', 'Recenzje', 'Opinie'];

function MainContent() {
  return (
    <div className="profile-content">
      <div className="statistics-title">Statystyki</div>
      <div className="profile-statistics">
        <div className="statistics-charts">
          <PieChart data={data} title="Tytuł1" />
          <Legend data={data} legend={legend} />
          <Statistics data={data} statistics={legend} />
        </div>
        <div className="statistics-charts">
          <PieChart data={data2} title="Tytuł2" />
          <Legend data={data2} legend={legend2} />
          <Statistics data={data2} statistics={legend2} />
        </div>
        <div className="statistics-charts">
          <PieChart data={data3} title="Tytuł3" />
          <Legend data={data3} legend={legend3} />
          <Statistics data={data3} statistics={legend3} />
        </div>
        <div className="statistics-legend"></div>
      </div>
      <div className="profile-review-content">
        <div className="review-title">Twoje recenzje</div>
        <div className="review-loop">
          <ReviewComponent />
        </div>
      </div>
    </div>
  );
}

export default function Profiles() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [userProfile, setUserProfile] = React.useState({ ...userprofiles.profile1 });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleSaveProfile = (updatedProfile: UserProfile) => {
    setUserProfile(updatedProfile);
  };

  return (
    <>
      <div className="profile-nav">
        <button className="toggle-button" onClick={toggleSidebar}>
          Profil
        </button>
      </div>
      <div className={`mainside ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-wrapper">
          <button className="toggle-button" onClick={closeSidebar}>
            ⇚ Wróć do statystyk
          </button>
          <Sidebar
            image={userProfile.image}
            nickname={userProfile.nickname}
            email={userProfile.email}
            information={userProfile.information}
            onSave={handleSaveProfile}
          />
        </div>
        <MainContent />
      </div>
    </>
  );
}