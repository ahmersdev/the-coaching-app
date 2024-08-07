import { IAssetsProps } from "@/interfaces";

const FooterPhoneIcon = ({ fill = "#F7F2E7" }: IAssetsProps) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8444 13.6386L16.7337 13.3158C15.9867 13.2378 15.2519 13.4716 14.7252 13.9504L12.4718 15.999C9.00595 14.3957 6.16468 11.8239 4.40113 8.66193L6.6668 6.60221C7.19341 6.12347 7.4506 5.45545 7.36487 4.77631L7.00971 1.97064C6.86275 0.846152 5.82176 0 4.57258 0H2.45387C1.06998 0 -0.0812292 1.04656 0.00449886 2.30465C0.653583 11.8127 9.0182 19.4058 19.4648 19.9959C20.8487 20.0738 21.9999 19.0273 21.9999 17.7692V15.8431C22.0121 14.7186 21.0814 13.7722 19.8444 13.6386Z"
        fill={fill}
      />
    </svg>
  );
};

export default FooterPhoneIcon;
