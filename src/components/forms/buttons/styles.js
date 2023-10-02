// Import dependencies
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Colors } from "../../themes/colors";
import { Fonts } from "../../themes/fonts";

export const ButtonsRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  width: 100%;
  float: right;
  margin-top: 10px;
  gap: 20px;
  & + & {
    margin-top: 12px;
  }
`;

export const ButtonVariant = styled.div`
  width: 16.6666667%;
  &:nth-of-type(n + 2) {
    text-align: center;
  }
`;
export const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 17px 0px;
  gap: 7.817px;
  color: ${(props) => (props.ghost ? Colors.primary : Colors.light)};
  background: ${(props) =>
    props.disabled
      ? `rgba(13,24,37,0.22) 0% 0% no-repeat padding-box`
      : props.ghost
      ? "transparent"
      : Colors.primary};
  border-radius: 9999px;
  font: normal normal normal 400 16px/25.6px ${Fonts.secondary};
  border: ${(props) =>
    props.disabled
      ? `1px solid rgba(13,24,37,0.22)`
      : props.error
      ? `1px solid ${Colors.buttonError}`
      : `1px solid ${Colors.primary}`};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  & + & {
    margin-top: 12px;
  }
  &:hover {
    transform: scale(0.992);
  }
  ${(props) =>
    props.hover & props.ghost &&
    css`
      color: ${Colors.light};
      border-color: ${Colors.primary};
    `};

  ${(props) =>
    props.disabled & props.ghost &&
    css`
      color: ${Colors.primary};
      border-color: ${Colors.primary};
    `};
  ${(props) =>
    props.fab &&
    css`
      display: flex;
      justify-content: center;
      border-radius: 50%;
      min-width: ${(props) => props.minWidth || "20px"};
      min-height: ${(props) => props.minHeight || "20px"};
      width: ${(props) => props.width || "35px"};
      height: ${(props) => props.height || "35px"};
      padding: 10px 16px;
      line-height: 24px;
      &:hover: {
        background: ${Colors.primary};
        color: ${Colors.primary};
      }
    `};

  ${(props) =>
    props.medium &&
    css`
      padding: 10px 16px;
    `};
  ${(props) =>
    props.small & props.delete &&
    css`
      border: 1px solid ${Colors.buttonError};
      font: normal normal normal 700 14px/19px ${Fonts.secondary};
      background: ${Colors.buttonError} 0% 0% no-repeat padding-box;
      text-transform: none;
      color: ${Colors.light};
      padding: 17px 0px;
    `};
  ${(props) =>
    props.small & props.cancel &&
    css`
      border: 1px solid ${Colors.primary};
      font: normal normal normal 700 14px/19px ${Fonts.secondary};
      background: ${Colors.primary} 0% 0% no-repeat padding-box;
      color: ${Colors.secondary};
      text-transform: none;
      padding: 10px 12px;
    `};

  ${(props) =>
    props.icon &&
    css`
      i {
        margin-right: 2px;
        font-size: 12px;
      }
    `};
`;

export const FabStyle = styled(Button)`
  display: flex;
  justify-content: center;
  align-items:center;
  border-radius: 50%;
  min-width: ${(props) => props.minWidth || "20px"};
  min-height: ${(props) => props.minHeight || "20px"};
  width: ${(props) => props.width || "35px"};
  height: ${(props) => props.height || "35px"};
  padding: 8px 10px;
  line-height: 24px;
  color: ${Colors.light}
  &:hover {
    background: ${Colors.primary};
    color: ${Colors.light};
  }
`;
export const DialogFormTitle = styled.h2`
  text-align: ${(props) => props.align || "left"};
  text-transform: uppercase;
  font: normal normal normal 600 14px/17px ${Fonts.primary};
  letter-spacing: 0.1em;
  color: ${(props) => props.color || Colors.secondary};
  margin-top: 0;
`;
