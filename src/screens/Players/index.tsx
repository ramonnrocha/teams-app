import { useState } from "react";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Destaque } from "../../components/Destaque";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { FlatList } from "react-native";
import { Player } from "../../components/Player";
import { Button } from "../../components/Button";
import { ListEmpty } from "../../components/ListEmpty";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  group: string
}

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);

  const route = useRoute()
  const { group } = route.params as RouteParams

  return (
    <Container>
      <Header showBackButton />
      <Destaque
        title={group}
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da Pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter title={item} isActive={item === team} />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Player onRemove={() => { }} name={item} />}
        ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button type="SECONDARY" text="Remover Sala" />
    </Container>
  );
}
