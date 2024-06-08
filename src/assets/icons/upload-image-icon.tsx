const UploadImageIcon = ({ fill = "#6927DA" }: any) => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="52" height="52" rx="12" fill="white" />
      <path
        d="M26.3298 26.8396C25.3698 28.5696 23.5798 28.7196 22.3398 27.1696L22.1198 26.8896C20.8298 25.2696 19.0098 25.4696 18.0798 27.3196L16.3598 30.7696C15.1598 33.1696 16.9098 35.9996 19.5898 35.9996H32.3498C34.9398 35.9996 36.6898 33.3496 35.6698 30.9596L32.5398 23.6496C31.4798 21.1696 29.5298 21.0696 28.2198 23.4296"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9697 19C23.9697 20.66 22.6297 22 20.9697 22C19.3097 22 17.9697 20.66 17.9697 19C17.9697 17.34 19.3097 16 20.9697 16C21.3297 16 21.6697 16.06 21.9797 16.18"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UploadImageIcon;
