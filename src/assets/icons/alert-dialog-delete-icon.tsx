import { ICustomProps } from "../assets.interface";

const AlertDialogDeleteIcon = ({
  fill = "#FEF2F2",
  stroke1 = "#FFEBEE",
  stroke2 = "#F64C4C",
}: ICustomProps) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="40" height="40" rx="20" fill={fill} />
      <rect
        x="3"
        y="3"
        width="40"
        height="40"
        rx="20"
        stroke={stroke1}
        strokeWidth="6"
      />
      <path
        d="M32 16.9805C28.67 16.6505 25.32 16.4805 21.98 16.4805C20 16.4805 18.02 16.5805 16.04 16.7805L14 16.9805"
        stroke={stroke2}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 15.97L19.72 14.66C19.88 13.71 20 13 21.69 13H24.31C26 13 26.13 13.75 26.28 14.67L26.5 15.97"
        stroke={stroke2}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.8504 20.1396L29.2004 30.2096C29.0904 31.7796 29.0004 32.9996 26.2104 32.9996H19.7904C17.0004 32.9996 16.9104 31.7796 16.8004 30.2096L16.1504 20.1396"
        stroke={stroke2}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3301 27.5H24.6601"
        stroke={stroke2}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 23.5H25.5"
        stroke={stroke2}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AlertDialogDeleteIcon;
