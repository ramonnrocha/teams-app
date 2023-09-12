import { PLAYER_COLLECTION } from "../storageConfig";
import { playersGetByGroup } from "./playersGetByGroups";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function playersRemoveByGroup(playerName: string, group: string) {
  try {
    const storage = await playersGetByGroup(group);

    const filter = storage.filter((player) => player.name !== playerName);

    const players = JSON.stringify(filter);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);

    return players;
  } catch (error) {
    throw error;
  }
}
