import { useTheme } from 'styled-components';

type IconProps = {
  isActive: boolean;
};

const CommentIcon = ({ isActive }:IconProps) => {
  const { colors } = useTheme();
  const color = isActive ? colors.blue.light : colors.grey.light;

  return (
<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path 
  fill={color}
  fillRule="evenodd" 
  clipRule="evenodd"
  d="M4.25 2.8125C4.00136 2.8125 3.7629 2.91127 3.58709 3.08709C3.41127 3.2629 3.3125 3.50136 3.3125 3.75V14.392L5.35225 12.3523C5.45774 12.2468 5.60082 12.1875 5.75 12.1875H14.75C14.9986 12.1875 15.2371 12.0887 15.4129 11.9129C15.5887 11.7371 15.6875 11.4986 15.6875 11.25V3.75C15.6875 3.50136 15.5887 3.2629 15.4129 3.08709C15.2371 2.91127 14.9986 2.8125 14.75 2.8125H4.25ZM2.79159 2.29159C3.17839 1.9048 3.70299 1.6875 4.25 1.6875H14.75C15.297 1.6875 15.8216 1.9048 16.2084 2.29159C16.5952 2.67839 16.8125 3.20299 16.8125 3.75V11.25C16.8125 11.797 16.5952 12.3216 16.2084 12.7084C15.8216 13.0952 15.297 13.3125 14.75 13.3125H5.983L3.14775 16.1477C2.98687 16.3086 2.74493 16.3567 2.53474 16.2697C2.32455 16.1826 2.1875 15.9775 2.1875 15.75V3.75C2.1875 3.20299 2.4048 2.67839 2.79159 2.29159Z"
/>
</svg>
  );
};

export default CommentIcon;