import styled, { css } from "styled-components";
import { darken, transparentize } from "polished";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import { Icon } from "./Icon/Icon";

const ToolTipText = styled.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
`;

const LargeStyles = css`
  font-size: 14px;
  line-height: 20px;
  //12px 16px - border
  padding: ${(props) => (props.iconPlacement === "only" ? "8px" : "8px 12px")};
`;

const MediumStyles = css`
  ${LargeStyles}
  //8px 12px - border
  padding ${(props) => (props.iconPlacement === "only" ? "4px" : "4px 8px")};
`;

const SmallStyles = css`
  font-size: 12px;
  line-height: 16px;
  //8px 8xp - border
  padding: 4px;
`;

const ContainedStyles = css`
  color: white;
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  &:hover{
    background-color ${(props) => darken(0.05, props.color)};
    border: 2px solid ${(props) => darken(0.05, props.color)};
  }
  &:active{
    background-color ${(props) => darken(0.1, props.color)};
    border: 2px solid ${(props) => darken(0.1, props.color)};
  }
`;

const OutlinedStyles = css`
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  background-color: ${(props) => transparentize(1, props.color)};
  &:hover {
    background-color: ${(props) => transparentize(0.9, props.color)};
  }
  &:active {
    background-color: ${(props) => transparentize(0.8, props.color)};
  }
`;

const TextStyles = css`
  color: ${(props) => props.color};
  background-color: ${(props) => transparentize(1, props.color)};
  border: 2px solid ${(props) => transparentize(1, props.color)};
  &:hover {
    background-color: ${(props) => transparentize(0.9, props.color)};
    color: ${(props) => darken(0.1, props.color)};
  }
  &:active {
    background-color: ${(props) => transparentize(0.8, props.color)};
    color: ${(props) => darken(0.2, props.color)};
  }
`;

const MarginReset = css`
  margin: unset;
`;

const ButtonLabel = styled.span`
  ${(props) =>
    props.iconPlacement === "left"
      ? "margin-left"
      : props.iconPlacement === "right"
      ? "margin-right"
      : "margin-top"}: ${(props) => (props.size === "sm" ? "4px" : "8px")};
  ${(props) => props.iconPlacement === "none" && MarginReset};
`;

const StyledButton = styled.button`
  font-weight: 600;
  border-radius: 4px;
  width: max-content;
  transition: all 110ms;
  display: flex;
  flex-direction: ${(props) =>
    props.iconPlacement === "top"
      ? "column"
      : props.iconPlacement === "right"
      ? "row-reverse"
      : "row"};
  align-items: center;
  ${(props) =>
    props.buttonStyle === "contained"
      ? ContainedStyles
      : props.buttonStyle === "outlined"
      ? OutlinedStyles
      : TextStyles}
  ${(props) =>
    props.size === "lg"
      ? LargeStyles
      : props.size === "md"
      ? MediumStyles
      : SmallStyles}
`;

export function Button({
  size,
  buttonStyle,
  color,
  label,
  iconPlacement,
  icon,
  onClick,
  hideToolTip,
}) {
  const iconSize = size === "sm" ? "sm" : "md";
  return (
    <Tooltip
      title={
        iconPlacement === "only" && !hideToolTip ? (
          <ToolTipText>{label}</ToolTipText>
        ) : (
          ""
        )
      }
      placement="top"
      arrow={true}
    >
      <StyledButton
        size={size}
        buttonStyle={buttonStyle}
        color={color}
        label={label}
        iconPlacement={iconPlacement}
        onClick={onClick}
      >
        {iconPlacement != "none" ? <Icon type={icon} size={iconSize} /> : null}{" "}
        {iconPlacement != "only" ? (
          <ButtonLabel size={size} iconPlacement={iconPlacement}>
            {label}
          </ButtonLabel>
        ) : null}
      </StyledButton>
    </Tooltip>
  );
}

Button.defaultProps = {
  size: "lg",
  buttonStyle: "contained",
  color: "#1e64f0",
  label: "Button",
  iconPlacement: "left",
  icon: "ab-test",
  hideToolTip: false,
};
