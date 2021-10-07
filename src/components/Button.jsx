import styled, { css } from "styled-components";
import { darken, transparentize } from "polished";
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

const ButtonLabel = styled.span``;

const StyledIcon = styled(Icon)`
  ${({ iconPlacement }) =>
    iconPlacement === "left"
      ? "margin-right"
      : iconPlacement === "right"
      ? "margin-left"
      : "margin-bottom"}: ${({ size }) => (size === "sm" ? "4px" : "8px")};
  ${({ iconPlacement }) => iconPlacement === "only" && "margin: 2px"};
`;
const StyledButton = styled.button`
  font-weight: 600;
  border-radius: 4px;
  width: ${(props) => (props.fullWidth ? "100%" : "max-content")};
  transition: all 110ms;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.variant === "contained"
      ? ContainedStyles
      : props.variant === "outlined"
      ? OutlinedStyles
      : TextStyles};
  ${(props) =>
    props.size === "lg"
      ? LargeStyles
      : props.size === "md"
      ? MediumStyles
      : SmallStyles};
  opacity: ${(props) => (props.loading || props.disabled ? 0.8 : 1)};
  & div {
    transition: all 110ms;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: max-content;
  position: relative;
`;

const LabelContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  opacity: ${(props) => (props.loading ? 0 : 1)};
  flex-direction: ${(props) =>
    props.iconPlacement === "top"
      ? "column"
      : props.iconPlacement === "right"
      ? "row-reverse"
      : "row"};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  opacity: ${(props) => (props.loading ? 1 : 0)};
`;

export function Button({
  size,
  variant,
  color,
  label,
  iconPlacement,
  icon,
  onClick,
  hideToolTip,
  loading,
  fullWidth,
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
        variant={variant}
        color={color}
        label={label}
        iconPlacement={iconPlacement}
        onClick={onClick}
        loading={loading}
        fullWidth={fullWidth}
      >
        <ButtonContainer>
          <LoadingContainer loading={loading}>
            <Icon type="spinner" size={iconSize} />
          </LoadingContainer>
          <LabelContainer loading={loading} iconPlacement={iconPlacement}>
            {icon && (
              <StyledIcon
                type={icon}
                size={iconSize}
                iconPlacement={iconPlacement}
              />
            )}{" "}
            {iconPlacement !== "only" ? (
              <ButtonLabel size={size} iconPlacement={iconPlacement}>
                {label}
              </ButtonLabel>
            ) : null}
          </LabelContainer>
        </ButtonContainer>
      </StyledButton>
    </Tooltip>
  );
}

Button.defaultProps = {
  size: "lg",
  variant: "contained",
  color: "#1e64f0",
  label: "Button",
  iconPlacement: "left",
  icon: null,
  hideToolTip: false,
  loading: false,
  fullWidth: false,
};
