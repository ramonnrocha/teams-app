import { useEffect, useRef, useState } from "react";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Destaque } from "../../components/Destaque";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Alert, FlatList, Keyboard, TextInput } from "react-native";
import { Player } from "../../components/Player";
import { Button } from "../../components/Button";
import { ListEmpty } from "../../components/ListEmpty";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "../../utils/AppError";
import { playersAddByGroup } from "../../storage/players/playersAddByGroup";
import { PlayerStorageDTO } from "../../storage/players/PlayerStorageDTO";
import { playersGetByGroup } from "../../storage/players/playersGetByGroups";
import { playersGetByGroupAndTeam } from "../../storage/players/playersGetByGroupAndTeam";
import { playersRemoveByGroup } from "../../storage/players/playersRemoveByGroup";
import { groupRemoveByName } from "../../storage/group/groupRemoveByName";

type RouteParams = {
  group: string;
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const keyExtractor = (item: any, index: any) => index.toString();

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Novo Jogador", "Por favor digite o nome do Jogador");
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playersAddByGroup(newPlayer, group);
      setNewPlayerName('')
      Keyboard.dismiss();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Jogador", error.message);
      } else {
        console.log(error);
        Alert.alert("Novo Jogador", "Não foi possivel Adicionar");
      }
    }
  }

  async function handleRemovePlayer(player: string) {
    try {
      await playersRemoveByGroup(player, group);
      fetchPlayersByTeam();
    } catch (error) {
      throw error;
    }
  }

  async function handleRemoveGroup() {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      throw error;
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const players = await playersGetByGroupAndTeam(group, team);
      setPlayers(players);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [players]);

  return (
    <Container>
      <Header showBackButton />
      <Destaque title={group} subtitle="Adicione a galera e separe os times" />
      <Form>
        <Input
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome da Pessoa"
          autoCorrect={false}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon onPress={handleAddPlayer} icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <Player
            onRemove={() => handleRemovePlayer(item.name)}
            name={item.name}
          />
        )}
        ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button
        onPress={handleRemoveGroup}
        type="SECONDARY"
        text="Remover Sala"
      />
    </Container>
  );
}
