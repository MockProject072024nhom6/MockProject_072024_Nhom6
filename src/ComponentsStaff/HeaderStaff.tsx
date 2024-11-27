import { Search, Calendar, MessageCircle, Bell } from 'lucide-react';
import {
  headerStaffContainer, searchContainer, searchIcon, searchInput,
  iconGroupContainer, iconContainer, userInfoWrapper, userInfoContainer,
  userDetailsContainer,userFullName, userFullLocation, userImage
} from "../Style/tailwindStyles";
import "../index.css";

interface HeaderStaffProps {
  userName: string;
  userLocation: string;
  userImageSrc: string;
}

function HeaderStaff({ userName, userLocation, userImageSrc }: HeaderStaffProps) {
  return (
    <header className={headerStaffContainer}>
      <div className={searchContainer}>
        <Search className={searchIcon} />
        <input 
          type="text" 
          placeholder="Search for anything..." 
          className={searchInput}
        />
      </div>
      
      <div className={userInfoWrapper}>
        <div className={iconGroupContainer}>
          <Calendar className={iconContainer} />
          <MessageCircle className={iconContainer} />
          <Bell className={iconContainer} />
        </div>
        
        <div className={userInfoContainer}>
          <div className={userDetailsContainer}>
            <span className={userFullName}>{userName}</span>
            <span className={userFullLocation}>{userLocation}</span>
          </div>
          <div className={userImage}>
            <img 
              src={userImageSrc} 
              alt="User" 
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderStaff;
