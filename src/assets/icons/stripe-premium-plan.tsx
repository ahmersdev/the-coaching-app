const StripPremiumPlan = ({ fill = "#6927DA", stroke = "#F9FAFB" }: any) => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="52" height="52" rx="12" fill={fill} />
      <path
        d="M36 20V22.42C36 24 35 25 33.42 25H30V18.01C30 16.9 30.91 16 32.02 16C33.11 16.01 34.11 16.45 34.83 17.17C35.55 17.9 36 18.9 36 20Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 21V35C16 35.83 16.94 36.3 17.6 35.8L19.31 34.52C19.71 34.22 20.27 34.26 20.63 34.62L22.29 36.29C22.68 36.68 23.32 36.68 23.71 36.29L25.39 34.61C25.74 34.26 26.3 34.22 26.69 34.52L28.4 35.8C29.06 36.29 30 35.82 30 35V18C30 16.9 30.9 16 32 16H21H20C17 16 16 17.79 16 20V21Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 23H26"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.75 27H25.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StripPremiumPlan;
