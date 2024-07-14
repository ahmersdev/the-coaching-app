import { IAssetsProps } from "@/interfaces";

const ClientAlertsIcon = ({ fill = "#9D9DA0" }: IAssetsProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4167 1.83301C15.895 1.83301 14.6667 3.06134 14.6667 4.58301C14.6667 6.10467 15.895 7.33301 17.4167 7.33301C18.9384 7.33301 20.1667 6.10467 20.1667 4.58301C20.1667 4.26217 20.1117 3.95967 20.0109 3.67551"
        stroke={fill}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.83331 13.7228V13.7503C1.83331 18.3337 3.66665 20.167 8.24998 20.167H13.75C18.3333 20.167 20.1666 18.3337 20.1666 13.7503V9.16699"
        stroke={fill}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8333 1.83301H8.24998C3.66665 1.83301 1.83331 3.66634 1.83331 8.24967V10.083"
        stroke={fill}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ClientAlertsIcon;
