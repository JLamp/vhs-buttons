import { iconMap } from "./iconMap";
import * as Icons from "./icons/index";

// size in pixels
export const iconSizeMap = {
  sm: "12",
  md: "16",
  lg: "24",
  xl: "32",
  xxl: "48",
};

export const Icon = ({ color, size, type, ...otherProps }) => {
  const IconElement = Icons[iconMap[type]];

  const props = {
    "aria-hidden": true,
    color,
    height: `${iconSizeMap[size]}px`,
    role: "presentation",
    viewBox: "0 0 24 24",
    width: `${iconSizeMap[size]}px`,
    xmlns: "http://www.w3.org/2000/svg",
    ...otherProps,
  };

  return <IconElement {...props} />;
};

Icon.defaultProps = {
  color: "currentColor",
  size: "lg",
};
