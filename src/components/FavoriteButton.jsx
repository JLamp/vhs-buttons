import { Button } from "./Button";
import { useState } from "react";

export function FavoriteButton() {
  const [favorite, changeFavorite] = useState(false);
  function handleClick() {
    changeFavorite(!favorite);
  }
  return (
    <>
      <h3>Favorite Button</h3>
      {favorite ? (
        <Button
          color="#fabe1f"
          size="md"
          variant="text"
          iconPlacement="only"
          icon="favorite"
          label="Remove Favorite"
          onClick={handleClick}
        />
      ) : (
        <Button
          color="#37373c"
          size="md"
          variant="text"
          iconPlacement="only"
          icon="favorite"
          label="Favorite"
          onClick={handleClick}
        />
      )}
    </>
  );
}
