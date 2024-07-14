import { IAssetsProps } from "@/interfaces";

export const EyeIcon = ({
  fill = "#0B0B12",
  stroke = "#F9FAFB",
}: IAssetsProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill={fill} />
      <path
        d="M13.524 17.6666C13.199 17.1916 13.0156 16.6166 13.0156 15.9999C13.0156 14.3499 14.349 13.0166 15.999 13.0166C17.649 13.0166 18.9823 14.3499 18.9823 15.9999C18.9823 17.6499 17.649 18.9833 15.999 18.9833"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6332 10.6501C19.2249 9.65006 17.6415 9.1084 15.9999 9.1084C13.0582 9.1084 10.3165 10.8417 8.4082 13.8417C7.6582 15.0167 7.6582 16.9917 8.4082 18.1667C10.3165 21.1667 13.0582 22.9001 15.9999 22.9001C18.9415 22.9001 21.6832 21.1667 23.5915 18.1667C24.3415 16.9917 24.3415 15.0167 23.5915 13.8417"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeIcon;
