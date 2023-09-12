import { GROUP_COLLECTION, PLAYER_COLLECTION } from "../storageConfig";
import { groupGetAll } from "./groupsGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function groupRemoveByName(group: string) {
  try {
    const storage = await groupGetAll();

    const filter: string[] = storage.filter((groupName) => groupName !== group);

    const groupStorage = JSON.stringify(filter);

    await AsyncStorage.setItem(GROUP_COLLECTION, groupStorage);
  } catch (error) {
    throw error;
  }
}
