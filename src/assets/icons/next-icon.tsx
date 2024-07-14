import { IAssetsProps } from "@/interfaces";

const NextIcon = ({ fill = "#0B0B12" }: IAssetsProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="16" rx="8" fill="white" />
      <path
        d="M9.6999 6.9404L7.4049 4.6454C7.31122 4.55227 7.18449 4.5 7.0524 4.5C6.92031 4.5 6.79358 4.55227 6.6999 4.6454C6.65304 4.69188 6.61584 4.74718 6.59046 4.80811C6.56507 4.86904 6.552 4.93439 6.552 5.0004C6.552 5.0664 6.56507 5.13176 6.59046 5.19268C6.61584 5.25361 6.65304 5.30891 6.6999 5.3554L8.9999 7.6454C9.04677 7.69188 9.08396 7.74718 9.10935 7.80811C9.13473 7.86904 9.1478 7.93439 9.1478 8.0004C9.1478 8.0664 9.13473 8.13176 9.10935 8.19269C9.08396 8.25361 9.04677 8.30892 8.9999 8.3554L6.6999 10.6454C6.60575 10.7389 6.55259 10.8659 6.55212 10.9986C6.55165 11.1313 6.60391 11.2587 6.6974 11.3529C6.79089 11.447 6.91795 11.5002 7.05063 11.5007C7.18332 11.5011 7.31075 11.4489 7.4049 11.3554L9.6999 9.0604C9.9808 8.77915 10.1386 8.3979 10.1386 8.0004C10.1386 7.6029 9.9808 7.22165 9.6999 6.9404Z"
        fill={fill}
      />
    </svg>
  );
};

export default NextIcon;
