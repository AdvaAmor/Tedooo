
import { useMatch, useResolvedPath } from "react-router-dom";
import HomeIcon from '../svg/HomeIcon';
import BellIcon from '../svg/BellIcon';
import MessageIcon from '../svg/MessageIcon';
import {TCustomLinkProps} from '../type';
import {
  NavbarContainer,
  NavbarWrapper,
  Logo,
  NavList,
  StyledNavLink,
  UserAvatarContainer,
  UserAvatarImg,
  SearchInput,
  SearchWrapper,
  SearchIconWrapper,
  NavbarHeader,
  NavbarContent,

} from './style/navbar.sc';

const screens = [
  {
    name: 'Home',
    link: `/`,
    icon: HomeIcon
  },
  {
    name: 'Messaging',
    icon: MessageIcon,
    link: `/chat`,
  },
  {
    name:'Notifications',
    icon: BellIcon,
    link: `/notifications`,
  }
];

const  Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarHeader>
            <Logo src="logo.png" alt="Site Logo" />
            <SearchWrapper>
              <SearchIconWrapper>
                <img src="search.svg" alt="search" />
              </SearchIconWrapper>
              <SearchInput type="text" placeholder="Search" />
            </SearchWrapper>
          </NavbarHeader>
          <NavbarContent>
          <NavList>
            {screens.map((screen) => (
              <CustomLink key={`screen-${screen.name}`} to={screen.link} icon={screen.icon}>
                <p>{screen.name}</p>
              </CustomLink>
            ))}
          </NavList>
          <UserAvatarContainer>
            <UserAvatarImg src="profile.jpeg" alt="Avatar" />
          </UserAvatarContainer>
        </NavbarContent>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

const CustomLink= ({ to, icon: Icon, children, ...props }:TCustomLinkProps) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li style={{height:'100%'}}>
      <StyledNavLink  to={to} {...props} $isActive={isActive ? true: false}>
        <p><Icon  isActive={isActive ? true: false} /></p>
        {children}
      </StyledNavLink >
    </li>
  )
};

export default Navbar;

