const getHexaOpacityColorCode = (color?: string, opacity: number = 1) => {
  return color + Math.round(opacity * 255).toString(16);
};

export default getHexaOpacityColorCode;
