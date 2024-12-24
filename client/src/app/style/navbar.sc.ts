import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TStyledProps } from '../../type';

export const NavbarContainer = styled.div`
  grid-area: navbar;
  display: flex;
  justify-content: center;
  box-shadow: 0px 7px 7px 0px #6d6d6d0a;
  background: ${({ theme: { colors } }) => colors.white};
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

export const NavbarHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  gap: 8px;
`;


export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  padding-left: 40px;
  height: 40px;
  background: ${({ theme: { colors } }) => colors.disable};
  border-radius: 32px;
  border: none;
  font-size: 16px;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.grey.light};
  }

  &:focus {
    outline: none;
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  align-items:center;
  gap: 0 32px;
`;

export const StyledNavLink = styled(Link)<TStyledProps>`
  height:100%;
  display: flex;
  align-items: center;
  color: ${({ $isActive, theme: { colors } }) => ($isActive ? colors.green : colors.grey.light)};
  border-bottom: ${({ $isActive, theme: { colors } }) => ($isActive ? `2px solid ${colors.green}` : 'none')};
  padding: 0.25rem;
  text-decoration: none;
  gap: 0 4px;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.grey.hover};
    border-bottom: ${({ theme: { colors } }) => `2px solid ${colors.white}`};
  }
`;

export const UserAvatarContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserAvatarImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
