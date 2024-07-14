import { IAssetsProps } from "@/interfaces";

const MyProfileIcon = ({
  fill = "#F9FAFB",
  stroke = "#6927DA",
}: IAssetsProps) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="42" height="42" rx="12" fill={fill} />
      <path
        d="M19.4299 11.42C20.3999 10.86 21.5999 10.86 22.5799 11.42L28.5199 14.85C29.4899 15.41 30.0899 16.45 30.0899 17.58V24.42C30.0899 25.54 29.4899 26.58 28.5199 27.15L22.5799 30.58C21.6099 31.14 20.4099 31.14 19.4299 30.58L13.4899 27.15C12.5199 26.59 11.9199 25.55 11.9199 24.42V17.58C11.9199 16.46 12.5199 15.42 13.4899 14.85L15.3899 13.75"
        stroke={stroke}
        strokeWidth="1.41818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9999 19.9998C22.2867 19.9998 23.3299 18.9566 23.3299 17.6698C23.3299 16.383 22.2867 15.3398 20.9999 15.3398C19.7131 15.3398 18.6699 16.383 18.6699 17.6698C18.6699 18.9566 19.7131 19.9998 20.9999 19.9998Z"
        stroke={stroke}
        strokeWidth="1.41818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 25.6594C25 23.8594 23.21 22.3994 21 22.3994C18.79 22.3994 17 23.8594 17 25.6594"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MyProfileIcon;
