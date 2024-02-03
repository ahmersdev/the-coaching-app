const DietDayIcon = ({ fill = "#F9FAFB", stroke = "#6927DA" }: any) => {
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
        d="M23 11C25 11 26 12.01 26 14.03V21.08C26 23.07 24.59 23.84 22.86 22.8L21.54 22C21.24 21.82 20.76 21.82 20.46 22L19.14 22.8C17.41 23.84 16 23.07 16 21.08V14.03C16 12.01 17 11 19 11H23Z"
        stroke={stroke}
        strokeWidth="1.41818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 23.9309C11 28.9809 13 31.0009 18 31.0009H24C29 31.0009 31 28.9809 31 23.9309V20.9009C31 16.5909 29.54 14.4809 26 13.9609"
        stroke={stroke}
        strokeWidth="1.41818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.82 13.9902C12.98 14.4602 11.53 16.0002 11.12 18.9402"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DietDayIcon;
