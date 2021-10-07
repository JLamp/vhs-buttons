import { useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon/Icon";

export function LoadingButton({
  size,
  variant,
  color,
  label,
  iconPlacement,
  icon,
  onClick,
  hideToolTip,
  loadingText,
  loading,
}) {
  const LABEL = loading ? loadingText + "..." : "button";
  const ICON = loading ? "spinner" : icon;

  return (
    <Button
      size={size}
      variant={variant}
      color={color}
      label={LABEL}
      icon={ICON}
      iconPlacement={iconPlacement}
      hideToolTip={hideToolTip}
    />
  );
}
