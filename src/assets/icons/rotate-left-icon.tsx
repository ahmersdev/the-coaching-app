import { IAssetsProps } from "@/interfaces";

const RotateLeftIcon = ({ fill = "#F9FAFB" }: IAssetsProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9477 12.2194C18.9477 16.6102 15.3911 20.1669 11.0002 20.1669C6.6094 20.1669 3.05273 16.6102 3.05273 12.2194C3.05273 10.5877 3.54773 9.06603 4.39107 7.80103M8.35107 4.65686C9.14857 4.41853 10.0286 4.2627 11.0002 4.2627C13.9427 4.2627 16.5186 5.86686 17.8844 8.24103"
        stroke={fill}
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.21387 4.87634L9.86303 1.83301"
        stroke={fill}
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.21387 4.87695L10.303 7.13195"
        stroke={fill}
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RotateLeftIcon;
