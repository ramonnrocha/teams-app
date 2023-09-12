import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Destaque } from "../../components/Destaque";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Content, Icon } from "./styles";
import { useState } from "react";
import { groupCreate } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/AppError";
import { Alert } from "react-native";
import { KeyboardAvoidingView } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState<string>("");

  const navigation = useNavigation();

  async function handleNewGroup() {
    try {
      if (group.trim() !== "") {
        await groupCreate(group);
        navigation.navigate("players", { group });
      } else {
        Alert.alert("Nova Turma", "Digite o nome da nova Turma");
      }
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Turma", error.message);
      } else {
        Alert.alert("Nova Turma", "Não foi possível criar nova Turma");
        console.log(error);
      }
    }
  }
  return (
    <Container>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <Header showBackButton />
        <Content>
          <Icon />
          <Destaque
            title="Nova Turma"
            subtitle="Crie uma turma para adicionar pessoas"
          />
          <Input
            onSubmitEditing={handleNewGroup}
            returnKeyType="done"
            onChangeText={setGroup}
            placeholder="Nome da turma"
          />
          <Button
            onPress={handleNewGroup}
            style={{ marginTop: 20 }}
            text="Criar"
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
