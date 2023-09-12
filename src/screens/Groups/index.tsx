import { Container, Title } from "./styles";
import { FlatList } from "react-native";
import { Header } from "../../components/Header";
import { Destaque } from "../../components/Destaque";
import { GroupCard } from "../../components/GroupCard";
import { useCallback, useState } from "react";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupGetAll } from "../../storage/group/groupsGetAll";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new')
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  async function fecthGroups() {
    try {
      const data = await groupGetAll()
      setGroups(data)
    } catch (error) {
      throw error
    }
  }
  useFocusEffect(useCallback(() => {
    fecthGroups();
  }, []))

  return (
    <Container>
      <Header />
      <Destaque title="Turmas" subtitle="Jogue com a sua Turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard onPress={() => handleOpenGroup(item)} title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={<ListEmpty message="Que tal cadastrar a primeira Turma?" />}
      />
      <Button onPress={handleNewGroup} text="Criar Sala" />
    </Container>
  );
}
