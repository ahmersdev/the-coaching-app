import { IAssetsProps } from "@/interfaces";

const LineIcon = ({ fill = "#F64C4C" }: IAssetsProps) => {
  return (
    <svg
      width="186"
      height="12"
      viewBox="0 0 186 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10C35.9733 5.8175 119.936 -1.29274 184 3.72626"
        stroke={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default LineIcon;
