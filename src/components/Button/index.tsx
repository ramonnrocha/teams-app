import { Container, TextButton, ButtonType } from "./styles";

type Props = {
  text: string;
  type?: ButtonType;
};

export function Button({ text, type="PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest} >
      <TextButton>{text}</TextButton>
    </Container>
  );
}
