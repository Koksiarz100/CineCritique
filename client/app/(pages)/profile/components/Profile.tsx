'use client'
import React, { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import PieChart from './Pie';
import '../styles/profile.scss'; 
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
    image: '/Default-Profile-Male.jpg', // placeholder image
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
  const [editedProfile, setEditedProfile] = useState<UserProfile>({
    image,
    nickname,
    email,
    information,
  });
  const [editedField, setEditedField] = useState<keyof UserProfile | null>(null);
  const [hovered, setHovered] = useState(false);

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

  useEffect(() => {
    document.body.addEventListener('click', handleDocumentClick);
    return () => {
      document.body.removeEventListener('click', handleDocumentClick);
    };
  }, [editedField, editedProfile, onSave]);

  const handlePhotoChangeClick = () => {
    const fileInput = document.getElementById('profile-image-input');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = e.target?.result as string;
        setEditedProfile((prevProfile) => {
          if (!prevProfile) {
            return {
              image: newImage,
              nickname,
              email,
              information,
            };
          }

          return {
            ...prevProfile,
            image: newImage,
          };
        });
        onSave({
          image: newImage,
          nickname,
          email,
          information,
        });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const renderEditableField = (field: keyof UserProfile, content: string) => {
    const [isMouseOver, setIsMouseOver] = useState(false);

    return (
      <div className={`profile-editable-field ${field}`}>
        {field === 'image' ? (
          <div
            className={`profile-photo-overlay ${isMouseOver ? 'hovered' : ''}`}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
            onClick={handlePhotoChangeClick}
          >
            <div className='profile-photo-wrapper'>
              <Image
                src={image}
                quality={100}
                alt={'Profile Picture'}
                width={250}
                height={250}
                className="profile-photo"
              />
            </div>
          </div>
        ) : (
          editedField === field ? (
            field === 'information' ? (
              <textarea
                value={editedProfile[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            ) : (
              <input
                type="text"
                value={editedProfile[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            )
          ) : (
            field === 'nickname' || field === 'email' || field === 'information' ? (
              <span
                className={`profile-editable-field-content ${['nickname', 'email', 'information'].includes(field) ? '' : 'non-editable'}`}
                onDoubleClick={() => handleDoubleClick(field)}
              >
              {content}
              </span>
            ) : null
          )
        )}
        {field === 'image' && (
          <input
            id="profile-image-input"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        )}
      </div>
    );
  };

  return (
    <>
      <div className="profile-info">Informacje</div>
      {renderEditableField('image', '')}
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({ ...userprofiles.profile1 });

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