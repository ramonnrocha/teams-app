import { ButtonIcon } from "../ButtonIcon";
import { Container, Icon, Name } from "./styles";

type Props = {
    name: string;
    onRemove: () => void;
};

export function Player({ name, onRemove}: Props) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon onPress={onRemove} icon="close" type="SECONDARY" />
    </Container>
  );
}
