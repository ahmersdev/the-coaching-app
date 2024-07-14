import { IAssetsProps } from "@/interfaces";

const ProfileIcon = ({ fill = "#F9FAFB" }: IAssetsProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.69193 2.01699C9.50026 1.55033 10.5003 1.55033 11.3169 2.01699L16.2669 4.87532C17.0753 5.34199 17.5753 6.20869 17.5753 7.15035V12.8503C17.5753 13.7837 17.0753 14.6504 16.2669 15.1254L11.3169 17.9837C10.5086 18.4504 9.50859 18.4504 8.69193 17.9837L3.74193 15.1254C2.93359 14.6587 2.43359 13.792 2.43359 12.8503V7.15035C2.43359 6.21702 2.93359 5.35032 3.74193 4.87532L5.32526 3.95867"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0003 9.16651C11.0726 9.16651 11.9419 8.29719 11.9419 7.22483C11.9419 6.15248 11.0726 5.2832 10.0003 5.2832C8.92791 5.2832 8.05859 6.15248 8.05859 7.22483C8.05859 8.29719 8.92791 9.16651 10.0003 9.16651Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3327 13.8836C13.3327 12.3836 11.841 11.167 9.99935 11.167C8.15768 11.167 6.66602 12.3836 6.66602 13.8836"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileIcon;
