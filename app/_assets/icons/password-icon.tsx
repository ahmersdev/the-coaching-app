const PasswordIcon = ({ fill = "#F9FAFB", stroke = "#6927DA" }: any) => {
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
        d="M20.02 28.5H16.5C15.88 28.5 15.33 28.48 14.84 28.41C12.21 28.12 11.5 26.88 11.5 23.5V18.5C11.5 15.12 12.21 13.88 14.84 13.59C15.33 13.52 15.88 13.5 16.5 13.5H19.96"
        stroke={stroke}
        strokeWidth="1.41818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.4995 22.3398V23.4998C30.4995 26.8798 29.7895 28.1198 27.1595 28.4098C26.6695 28.4798 26.1195 28.4998 25.4995 28.4998H24.0195"
        stroke={stroke}
        strokeWidth="1.41818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.0195 13.5H25.4995C26.1195 13.5 26.6695 13.52 27.1595 13.59C29.7895 13.88 30.4995 15.12 30.4995 18.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 11V31"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4945 21H20.5035"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0941 21H16.1031"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PasswordIcon;
