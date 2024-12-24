import styled from 'styled-components';
import { TStyledProps } from '../../type';

export const StyledContainer = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  align-items: center;
  gap: 16px;
  overflow-y: auto;
`;

export const PostContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 24px;
  background: ${({ theme: { colors } }) => colors.white};
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const ShopDetails = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.blue.light};
  & > * {
    color: ${({ theme: { colors } }) => colors.grey.light};
  }
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 24px;
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const PostText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
`;

export const ImageGallery = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  background: ${({ theme: { colors } }) => colors.background.img};
`;

export const PostImage = styled.img`
  height: 100%;
  max-width: 100%;
  min-width: 50%;
  object-fit: cover;
`;

export const PostFooter = styled.div`
  margin: 8px 0;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterDivider = styled.hr`
  border: ${({ theme: { colors } }) => `1px solid ${colors.disable}`};
  width: 100%;
`;

export const FooterText = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: ${({ theme: { colors } }) => colors.grey.light};
`;

export const ActionButton = styled.button<TStyledProps>`
  background: none;
  border: none;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ $isActive, theme: { colors } }) => ($isActive ? colors.blue.light : colors.grey.light)};
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const MsgText = styled.p`
  font-size: 14px;
   color: ${({ theme: { colors } }) => colors.grey.light};
`;
