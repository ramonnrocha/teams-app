import { TouchableOpacityProps } from "react-native";
import { Container, TextButton, ButtonType } from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
  type?: ButtonType;
};

export function Button({ text, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <TextButton>{text}</TextButton>
    </Container>
  );
}
