import { IAssetsProps } from "@/interfaces";

const FaqsIcon = ({ fill = "#9D9DA0" }: IAssetsProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.83398 10.5967V12.3109C1.83398 15.0609 3.66732 16.8943 6.41732 16.8943H10.084L14.1632 19.6076C14.7682 20.0109 15.584 19.5801 15.584 18.8468V16.8943C18.334 16.8943 20.1673 15.0609 20.1673 12.3109V6.81087C20.1673 4.06087 18.334 2.22754 15.584 2.22754H6.41732C3.66732 2.22754 1.83398 4.06087 1.83398 6.81087"
        stroke={fill}
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0002 10.4141V10.2216C11.0002 9.59827 11.3852 9.26825 11.7702 9.00242C12.146 8.74575 12.5218 8.41576 12.5218 7.81076C12.5218 6.96743 11.8435 6.28906 11.0002 6.28906C10.1568 6.28906 9.47852 6.96743 9.47852 7.81076"
        stroke={fill}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9952 12.6038H11.0035"
        stroke={fill}
        strokeWidth="1.375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FaqsIcon;
