import { Button } from "./Button";
import { useState } from "react";
import { colors } from "../colors";
import styled from "styled-components";
import { iconMap } from "./Icon/iconMap";

const iconList = Object.keys(iconMap);

const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  & label {
    font-size: 12px;
    font-weight: 600;
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

export function MakeButton() {
  const [size, changeSize] = useState("lg");
  const [style, changeStyle] = useState("contained");
  const [label, changeLabel] = useState("Button");
  const [color, changeColor] = useState("#1e64f0");
  const [iconPlacement, changeIconPlacement] = useState("left");
  const [icon, changeIcon] = useState("ab-test");
  const [hideToolTip, changeHideToolTip] = useState(false);
  return (
    <div>
      <h3> Make A Button </h3>
      <Button
        size={size}
        buttonStyle={style}
        label={label.length > 0 ? label : "Button"}
        color={color}
        iconPlacement={iconPlacement}
        icon={icon}
        hideToolTip={hideToolTip}
      />
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
          <label>Button Style</label>
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
            <option value={"none"}>None</option>
          </select>
        </StyledForm>
        {/* Hide ToolTip */}
        <StyledForm>
          <label>Hide ToolTip?</label>
          <select
            onChange={(e) => {
              const selectedValue = e.target.value;
              changeHideToolTip(selectedValue);
              console.log(selectedValue);
            }}
            disabled={iconPlacement !== "only" ? true : false}
          >
            <option value={false}>False</option>
            <option value={true}>True</option>
          </select>
        </StyledForm>
      </InputsContainer>
    </div>
  );
}
