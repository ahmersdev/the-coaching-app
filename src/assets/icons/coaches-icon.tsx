import { IAssetsProps } from "@/interfaces";

const CoachesIcon = ({ fill = "#9D9DA0" }: IAssetsProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.623 3.62967C12.063 4.28051 12.3197 5.05967 12.3197 5.90301C12.3105 8.10301 10.578 9.89051 8.39635 9.96384C8.30469 9.95467 8.19469 9.95467 8.09385 9.96384C5.91219 9.89051 4.17969 8.10301 4.17969 5.90301C4.17969 3.65717 5.99469 1.83301 8.24969 1.83301"
        stroke={fill}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.041 3.66699C16.8194 3.66699 18.2494 5.10616 18.2494 6.87533C18.2494 8.60783 16.8744 10.0195 15.1602 10.0837C15.0869 10.0745 15.0044 10.0745 14.9219 10.0837"
        stroke={fill}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.81414 13.347C1.59581 14.832 1.59581 17.252 3.81414 18.7278C6.33497 20.4145 10.4691 20.4145 12.99 18.7278C15.2083 17.2428 15.2083 14.8228 12.99 13.347C10.4783 11.6695 6.34414 11.6695 3.81414 13.347Z"
        stroke={fill}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8125 18.333C17.4725 18.1955 18.0958 17.9297 18.6092 17.5355C20.0392 16.463 20.0392 14.6938 18.6092 13.6213C18.105 13.2363 17.4908 12.9797 16.84 12.833"
        stroke={fill}
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CoachesIcon;
