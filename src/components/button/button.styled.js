import styled from "styled-components";
import { hexToRGBA } from "./../../utils/hex-to-rgba";
import { INVERSE, PRIMARY, GHOST, DISABLED } from "../../constants/button.constants";

const checkType = (props) => {
  switch (props.type) {
    case PRIMARY:
      return {
        color: props.theme.colors.light,
        backgroundColor: props.theme.colors.dark,
        borderColor: props.theme.colors.dark,
      };
    case GHOST:
      return {
        color: props.theme.colors.dark,
        backgroundColor: props.theme.colors.gallery,
        borderColor: props.theme.colors.gallery,
      };

    case INVERSE:
      return {
        color: props.theme.colors.dark,
        backgroundColor: props.theme.colors.light,
        borderColor: props.theme.colors.dark,
      };

    case DISABLED:
      return {
        color: props.theme.colors.dark,
        backgroundColor: props.theme.colors.gallery,
        borderColor: props.theme.colors.gallery,
      };
      
    default:
      return {
        color: props.theme.colors.light,
        backgroundColor: props.theme.colors.dark,
        borderColor: props.theme.colors.dark,
      };
  }
};

export const ButtonStyled = styled.button`
  width: 100%;
  font-family: ${(props) => props.theme.bodyFont};
  font-size: ${(props) => props.theme.fontSizes.font_20};
  padding: ${(props) => props.theme.spaces.space_15} 0;
  border-radius: ${(props) => props.theme.spaces.space_6};
  border: solid ${(props) => props.theme.spaces.space_1}
    ${(props) => props.theme.colors.dark};
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;

  ${checkType};
  :focus {
    outline: 0;
  }

  ${props => props.type !== DISABLED && `:hover {
    box-shadow: 0 0 ${(props) => props.theme.spaces.space_xs} 0
      ${(props) => hexToRGBA(props.theme.colors.dark, 0.16)};
  }`}
`;
