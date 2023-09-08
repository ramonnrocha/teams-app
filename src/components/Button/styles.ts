import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonType = "PRIMARY" | "SECONDARY"

type Props = {
    type: ButtonType
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center; 
  background: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED};
`;

export const TextButton = styled.Text`
    font-size:${({theme}) => theme.FONT_SIZE.MD}px;
    color: ${({theme}) => theme.COLORS.WHITE}
`