import { Button } from "./Button";
import { useState } from "react";
import { colors } from "../colors";
import styled from "styled-components";
import { iconMap } from "./Icon/iconMap";
import { Switch } from "@mui/material";

const iconList = Object.keys(iconMap);

const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  flex-wrap: wrap;
  max-width: 600px;
  & label {
    font-size: 12px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 4px;
    padding-right: 8px;
  }
  & input,
  select {
    font-size: 14px;
    padding: 8px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`;

const ButtonContainer = styled.div`
  max-width: 240px;
  border-radius: 8px;
  padding: 24px 0;
  // background: black;
  margin: 16px 0;
`;

export function MakeButton() {
  const [size, changeSize] = useState("lg");
  const [style, changeStyle] = useState("contained");
  const [label, changeLabel] = useState("Button");
  const [color, changeColor] = useState("#1e64f0");
  const [iconPlacement, changeIconPlacement] = useState("left");
  const [icon, changeIcon] = useState("");
  const [loading, changeLoading] = useState(false);
  function handleLoading() {
    const STATE = loading;
    changeLoading(!STATE);
  }
  const [hideToolTip, changeHideToolTip] = useState(false);
  function handleHideToolTip() {
    const STATE = loading;
    changeHideToolTip(!STATE);
  }
  const [fullWidth, changeFullWidth] = useState(false);
  function handleFullWidth() {
    const STATE = fullWidth;
    changeFullWidth(!STATE);
  }
  return (
    <div>
      <h3> Make A Button </h3>
      <ButtonContainer>
        <Button
          size={size}
          variant={style}
          label={label.length > 0 ? label : "Button"}
          color={color}
          iconPlacement={iconPlacement}
          icon={icon}
          hideToolTip={hideToolTip}
          loading={loading}
          fullWidth={fullWidth}
        />
      </ButtonContainer>
      <InputsContainer>
        {/* LABEL */}
        <StyledForm>
          <label>Label</label>
          <input
            type="text"
            name="Label"
            placeholder="Button"
            onChange={(e) => {
              const newValue = e.target.value;
              changeLabel(newValue);
            }}
          />
        </StyledForm>
        {/* Icon */}
        <StyledForm>
          <label>Icon</label>
          <select
            onChange={(e) => {
              const selectedValue = e.target.value;
              changeIcon(selectedValue);
            }}
          >
            <option value={""}>None</option>
            {iconList.map((icon) => (
              <option key={icon} value={icon}>
                {icon}
              </option>
            ))}
          </select>
        </StyledForm>

        {/* SIZE */}
        <StyledForm>
          <label>Size</label>
          <select
            onChange={(e) => {
              const selectedValue = e.target.value;
              changeSize(selectedValue);
            }}
          >
            <option value={"lg"}>Large</option>
            <option value={"md"}>Medium</option>
            <option value={"sm"}>Small</option>
          </select>
        </StyledForm>

        {/* STYLE */}
        <StyledForm>
          <label>Variant</label>
          <select
            onChange={(e) => {
              const selectedValue = e.target.value;
              changeStyle(selectedValue);
            }}
          >
            <option value={"contained"}>Contained</option>
            <option value={"outlined"}>Outlined</option>
            <option value={"text"}>Text</option>
          </select>
        </StyledForm>

        {/* COLOR */}
        <StyledForm>
          <label>Color</label>
          <select
            onChange={(e) => {
              const selectedValue = e.target.value;
              changeColor(selectedValue);
            }}
          >
            {colors.map((color) => (
              <option key={color[0]} value={color[1]}>
                {color[0]}
              </option>
            ))}
          </select>
        </StyledForm>
        {/* ICON PLACEMENT */}
        <StyledForm>
          <label>Icon Placement</label>
          <select
            onChange={(e) => {
              const selectedValue = e.target.value;
              changeIconPlacement(selectedValue);
            }}
          >
            <option value={"left"}>Left</option>
            <option value={"right"}>Right</option>
            <option value={"top"}>Top</option>
            <option value={"only"}>Only</option>
          </select>
        </StyledForm>

        {/* Hide ToolTip */}
        <StyledForm>
          <label>Hide ToolTip?</label>
          <Switch
            onChange={handleHideToolTip}
            disabled={iconPlacement === "only" ? false : true}
          />
        </StyledForm>

        {/* Full Width */}
        <StyledForm>
          <label>Full Width?</label>
          <Switch onChange={handleFullWidth} />
        </StyledForm>

        {/* Loading */}
        <StyledForm>
          <label>Loading?</label>
          <Switch onChange={handleLoading} />
        </StyledForm>
      </InputsContainer>
    </div>
  );
}
