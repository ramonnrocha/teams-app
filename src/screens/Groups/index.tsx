import { Container, Title } from "./styles";
import { FlatList } from "react-native";
import { Header } from "../../components/Header";
import { Destaque } from "../../components/Destaque";
import { GroupCard } from "../../components/GroupCard";
import { useState } from "react";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Destaque title="Turmas" subtitle="Jogue com a sua Turma" />
      <FlatList
        style={{ width: "90%" }}
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={<ListEmpty message="Que tal cadastrar a primeira Turma?" />}
      />
      <Button text="Criar Sala" />
    </Container>
  );
}
