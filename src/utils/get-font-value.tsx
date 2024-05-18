export function pxToRem(value: any) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ xs, md, lg }: any) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(xs),
    },
    "@media (max-width:600px)": {
      fontSize: pxToRem(xs),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}
