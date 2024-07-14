import { IAssetsProps } from "@/interfaces";

const WorkoutDayIcon = ({
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
        d="M17.11 24.89L24.889 17.11M11 31L12.848 29.152M31 11L29.152 12.848M11.1 18.878L23.121 30.9L22.944 31.076L21.207 30.868C19.457 30.658 17.685 31.006 16.109 31.794L15.697 32L10 26.303L10.206 25.891C10.994 24.315 11.342 22.543 11.132 20.793L10.924 19.056L11.1 18.878ZM18.88 11.102L30.9 23.122L31.077 22.945L30.869 21.208C30.659 19.458 31.007 17.686 31.795 16.11L32 15.697L26.303 10L25.89 10.206C24.315 10.994 22.542 11.342 20.793 11.132L19.055 10.924L18.879 11.101L18.88 11.102Z"
        stroke={stroke}
        strokeWidth="1.42"
      />
    </svg>
  );
};

export default WorkoutDayIcon;
