const textStyles = {
  h1: {
    fontFamily: "body",
    fontSize: {
      base: "4xl",
      xl: "xxl",
    },
    fontWeight: "regular",
    lineHeight: {
      base: "38px",
      xl: "44px",
    },
    letterSpacing: "0",
  },
  h2: {
    fontFamily: "body",
    fontSize: "3xl",
    fontWeight: "regular",
    lineHeight: "34px",
    letterSpacing: "0",
  },
  h3: {
    fontFamily: "body",
    fontSize: "2xl",
    fontWeight: "regular",
    lineHeight: "30px",
    letterSpacing: "0",
  },
  h4: {
    fontFamily: "body",
    fontSize: "xl",
    fontWeight: "regular",
    lineHeight: "24px",
    letterSpacing: "0",
  },
  body16regular: {
    fontFamily: "body",
    fontSize: "lg",
    fontWeight: "regular",
    lineHeight: "24px",
    letterSpacing: "0",
    color: "typographyPrimary",
  },
  body16medium: {
    fontFamily: "body",
    fontSize: "lg",
    fontWeight: "medium",
    lineHeight: "24px",
    letterSpacing: "0",
  },
  body14regular: {
    fontFamily: "body",
    fontSize: "md",
    fontWeight: "regular",
    lineHeight: "20px",
    letterSpacing: "0",
  },
  body14medium: {
    fontFamily: "body",
    fontSize: "md",
    fontWeight: "medium",
    lineHeight: "20px",
    letterSpacing: "0",
  },
  body12regular: {
    fontFamily: "body",
    fontSize: "sm",
    fontWeight: "regular",
    lineHeight: "18px",
    letterSpacing: "0",
  },
  body10regular: {
    fontFamily: "body",
    fontSize: "xs",
    fontWeight: "regular",
    lineHeight: "13px",
    letterSpacing: "0",
  },
};

export type TextStyles = typeof textStyles;

export default textStyles;
