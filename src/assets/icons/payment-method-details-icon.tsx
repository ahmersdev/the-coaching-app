import { IAssetsProps } from "@/interfaces";

const PaymentMethodDetailsIcon = ({
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
        d="M11 17H22.5"
        stroke={stroke}
        strokeWidth="1.41818"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 25H17"
        stroke={stroke}
        strokeWidth="1.41818"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 25H23.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 19.51V16.39C11 12.88 11.89 12 15.44 12H22.5"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 19.5293V24.6093C31 28.1193 30.11 28.9993 26.56 28.9993H15.44C11.89 28.9993 11 28.1193 11 24.6093V23.5093"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.5 14.5L27 16L31 12"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PaymentMethodDetailsIcon;
