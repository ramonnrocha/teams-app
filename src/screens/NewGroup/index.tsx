import { Button } from "../../components/Button";
import { Destaque } from "../../components/Destaque";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Destaque
          title="Nova Turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button style={{ marginTop: 20 }} text="Criar" />
      </Content>
    </Container>
  );
}
