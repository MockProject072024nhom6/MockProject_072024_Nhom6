import { Home, DollarSign, FileText, User, Shield, MessageSquare, Clipboard, Calendar, ChevronRight } from 'lucide-react';
import {
  navbarContainer, logoStaffContainer, navStaffItemsContainer, navStaffItem, navIcon, navText, logoImage, toggleButton,
  collapsedNavbar, collapsedLogo, collapsedNavText, expandedIcon, collapsedIcon
} from "../Style/tailwindStyles";
import "../index.css";
import logo from "../assets/logo1.png";
import { useState } from 'react';

function NavbarStaff() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`${navbarContainer} ${isCollapsed ? collapsedNavbar : ''}`}>
      <div className={`${logoStaffContainer} ${isCollapsed ? collapsedLogo : ''}`}>
        <img 
          src={logo}
          alt="Logo" 
          className={`${logoImage} ${isCollapsed ? 'hidden' : ''}`}
        />
        <span onClick={toggleNavbar} className={`${toggleButton} ${isCollapsed ? 'rotate-90' : ''}`}>
          <ChevronRight className={`transition-transform ${isCollapsed ? collapsedIcon : expandedIcon}`} />
        </span>
      </div>
      <div className={navStaffItemsContainer}>
        <ul className="space-y-2">
          <li className={`${navStaffItem} ${isCollapsed ? 'justify-center' : ''}`}>
            <a href="/dashboard" className="flex items-center">
              <Home className={navIcon} />
              <span className={`${navText} ${isCollapsed ? 'hidden' : ''}`}>Dashboard</span>
            </a>
          </li>
          <li className={`${navStaffItem} ${isCollapsed ? 'justify-center' : ''}`}>
            <a href="/price" className="flex items-center">
              <DollarSign className={navIcon} />
              <span className={`${navText} ${isCollapsed ? 'hidden' : ''}`}>Price</span>
            </a>
          </li>
          <li className={`${navStaffItem} ${isCollapsed ? 'justify-center' : ''}`}>
            <a href="/contract" className="flex items-center">
              <FileText className={navIcon} />
              <span className={`${navText} ${isCollapsed ? 'hidden' : ''}`}>Contract</span>
            </a>
          </li>
          <li className={`${navStaffItem} ${isCollapsed ? 'justify-center' : ''}`}>
            <a href="/customer" className="flex items-center">
              <User className={navIcon} />
              <span className={`${navText} ${isCollapsed ? 'hidden' : ''}`}>Customer</span>
            </a>
          </li>
          <li className={`${navStaffItem} ${isCollapsed ? 'justify-center' : ''}`}>
            <a href="/security-guard" className="flex items-center">
              <Shield className={navIcon} />
              <span className={`${navText} ${isCollapsed ? 'hidden' : ''}`}>Security Guard</span>
            </a>
          </li>
          <li className={`${navStaffItem} ${isCollapsed ? 'justify-center' : ''}`}>
            <a href="/feedback" className="flex items-center">
              <MessageSquare className={navIcon} />
              <span className={`${navText} ${isCollapsed ? 'hidden' : ''}`}>Feedback</span>
            </a>
          </li>
          <li className={`${navStaffItem} ${isCollapsed ? 'justify-center' : ''}`}>
            <a href="/request" className="flex items-center">
              <Clipboard className={navIcon} />
              <span className={`${navText} ${isCollapsed ? 'hidden' : ''}`}>Request</span>
            </a>
          </li>
          <li className={`${navStaffItem} ${isCollapsed ? 'justify-center' : ''}`}>
            <a href="/equipment" className="flex items-center">
              <Clipboard className={navIcon} />
              <span className={`${navText} ${isCollapsed ? 'hidden' : ''}`}>Equipment</span>
            </a>
          </li>
          <li className={`${navStaffItem} ${isCollapsed ? 'justify-center' : ''}`}>
            <a href="/training-plan" className="flex items-center">
              <Calendar className={navIcon} />
              <span className={`${navText} ${isCollapsed ? 'hidden' : ''}`}>Training Plan</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarStaff;
