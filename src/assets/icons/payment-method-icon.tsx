import { IAssetsProps } from "@/interfaces";

const PaymentMethodIcon = ({ fill = "#9CA3AF" }: IAssetsProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66699 7.08398H11.2503"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13.75H6.66667"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 13.75H12.0833"
        stroke={fill}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66699 9.17435V6.57435C1.66699 3.64935 2.40866 2.91602 5.36699 2.91602H11.2503"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3337 9.19141V13.4247C18.3337 16.3497 17.592 17.0831 14.6337 17.0831H5.36699C2.40866 17.0831 1.66699 16.3497 1.66699 13.4247V12.5081"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 4.99935L15 6.24935L18.3333 2.91602"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PaymentMethodIcon;
