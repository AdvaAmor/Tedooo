import { useTheme } from 'styled-components';

type IconProps = {
  isActive: boolean;
};

const MessageIcon = ({ isActive }:IconProps) => {
  const { colors } = useTheme();
  const color = isActive ? colors.green : colors.grey.light;

  return (
<svg 
  width="18" 
  height="18" 
  viewBox="0 0 18 18" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    d="M15.75 8.62502C15.7526 9.61492 15.5213 10.5914 15.075 11.475C14.5458 12.5338 13.7323 13.4244 12.7256 14.047C11.7189 14.6696 10.5587 14.9996 9.375 15C8.3851 15.0026 7.40859 14.7713 6.525 14.325L2.25 15.75L3.675 11.475C3.2287 10.5914 2.99742 9.61492 3 8.62502C3.00046 7.44134 3.33046 6.28116 3.95304 5.27443C4.57562 4.26771 5.46619 3.4542 6.525 2.92502C7.40859 2.47872 8.3851 2.24744 9.375 2.25002H9.75C11.3133 2.33627 12.7898 2.99609 13.8969 4.10317C15.0039 5.21024 15.6638 6.68676 15.75 8.25002V8.62502Z" 
    stroke={color}
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  />
</svg>
  );
};

export default MessageIcon;
