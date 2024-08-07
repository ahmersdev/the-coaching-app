import { IAssetsProps } from "@/interfaces";

const FooterEmailIcon = ({ fill = "#F7F2E7" }: IAssetsProps) => {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9375 0.5C21.0762 0.5 22 1.45138 22 2.625C22 3.29349 21.6949 3.92214 21.175 4.325L11.825 11.55C11.3352 11.9263 10.6648 11.9263 10.175 11.55L0.825 4.325C0.305637 3.92214 0 3.29349 0 2.625C0 1.45138 0.923398 0.5 2.0625 0.5H19.9375ZM9.35 12.6833C10.3297 13.4404 11.6703 13.4404 12.65 12.6833L22 5.45833V14.6667C22 16.2294 20.7668 17.5 19.25 17.5H2.75C1.23105 17.5 0 16.2294 0 14.6667V5.45833L9.35 12.6833Z"
        fill={fill}
      />
    </svg>
  );
};

export default FooterEmailIcon;
