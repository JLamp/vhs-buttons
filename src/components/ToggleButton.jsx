import { Button } from "./Button";
import { useState } from "react";

export function ToggleButton({
  toggleOffIcon,
  toggleOnIcon,
  toggleOffLabel,
  toggleOnLabel,
}) {
  const [toggle, changeToggle] = useState(false);
  function handleClick() {
    changeToggle(!toggle);
  }
  return toggle ? (
    // Toggle On
    <Button
      color="#fa4040"
      size="lg"
      buttonStyle="outlined"
      iconPlacement="only"
      icon={toggleOnIcon}
      label={toggleOnLabel}
      onClick={handleClick}
    />
  ) : (
    // Toggle Off
    <Button
      color="white"
      size="lg"
      buttonStyle="outlined"
      iconPlacement="only"
      icon={toggleOffIcon}
      label={toggleOffLabel}
      onClick={handleClick}
    />
  );
}
